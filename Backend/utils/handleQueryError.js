module.exports = function handleQueryError(res, error) {
    console.error('Error en la consulta:', error);
    res.status(500).json({
      success: false,
      message: 'Error en la operación de base de datos',
      error: error.message
    });
  };
  