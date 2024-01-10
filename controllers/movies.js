const Movie = require('../models/movie');
const NotFound = require('../error/NotFound');
const BadRequest = require('../error/BadRequest');
const Forbidden = require('../error/Forbidden');

module.exports.getAllMovies = (req, res, next) => {
  const owner = req.user._id;
  Movie.find({ owner })
    .then((movies) => res.send(movies))
    .catch(next);
};

module.exports.createMovies = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  Movie.create({
    owner: req.user._id,
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  })
    .then((movie) => res.status(201).send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequest('Ошибка валидации при создании фильма'));
      }
      return next(err);
    });
};

module.exports.deleteMovie = (req, res, next) => {
  const userId = req.user._id;
  Movie.findById(req.params.movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFound('Запрашиваемый фильм не найден');
      }

      if (movie.owner.toString() !== userId) {
        throw new Forbidden('Недостаточно прав для удаления карточки');
      }

      return Movie.findByIdAndDelete(req.params.movieId);
    })
    .then((deletedMovie) => res.status(200).send(deletedMovie))
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadRequest('Некорректный формат данных для удаления фильма'));
      }
      return next(err);
    });
};
