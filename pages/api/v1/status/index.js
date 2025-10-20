function status(request, response) {
  response.status(200).json({ chave: "Tudo dando certo!" });
}

export default status;
