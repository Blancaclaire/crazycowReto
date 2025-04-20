module.exports = (req, res, next) => {
    const { role } = req.user; // Suponiendo que el usuario ya está autenticado
    if (role !== 'worker') return res.status(403).json({ message: 'Acceso denegado' });
    next();
  };
  