/*
Toda a rota que tiver esse middleware e o usuário não estiver logado, ele será
redirecionado para a tela de login.
O next serve para dar continuidade a requisição
*/
function adminAuth(req, res, next) {
	if (req.session.user) {
		next()
	} else {
		res.redirect("/login")
	}
}

module.exports = adminAuth
