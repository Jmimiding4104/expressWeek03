function errorHandle(res) {
  res.status(400).json({
    'status': 'false',
    'message': '欄位未填寫正確，或無此 todo ID'
  })
};

module.exports = errorHandle;