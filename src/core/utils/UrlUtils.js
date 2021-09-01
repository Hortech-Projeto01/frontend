/**
 * Converte o link com o nome do param para o link com o valor a ser utilizado.
 * Ex: "/planta/:id" -> "/planta/1"
 * 
 * @param {string} link Link da rota com o param a ser substituido.
 * @param {string} value Valor do param.
 * @param {string} param Nome do param. default = ":id"
 * @returns Link com o valor do param a ser inserido.
 */

export const replaceParamsToLink = (link, value, param = ":id") => {
	const re = new RegExp(param);
	return link.replace(re, value);
}