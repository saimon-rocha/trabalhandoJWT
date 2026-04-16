import VendaDao from "../dao/VendaDao.js";

class VendaController {

    async index(req, res) {
        try {
            const vendas = await VendaDao.listar();

            const vendasFormatadas = vendas.map(v => ({
                ...v,
                dt_venda: new Date(v.dt_venda)
                    .toLocaleString('pt-BR', {
                        timeZone: 'America/Sao_Paulo'
                    })
                    .replace(',', '')
            }));

            return res.status(200).json({
                success: true,
                data: vendasFormatadas
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                error: 'Erro ao listar vendas'
            });
        }
    }

    async cad(req, res) {
        try {
            const { cd_cliente, cd_usuario, itens } = req.body;

            // validação básica
            if (!cd_cliente || !cd_usuario || !Array.isArray(itens) || itens.length === 0) {
                return res.status(400).json({
                    success: false,
                    error: 'Dados inválidos'
                });
            }

            // valida itens
            for (const item of itens) {
                if (
                    !item.cd_produto ||
                    !Number.isInteger(item.quantidade) ||
                    item.quantidade <= 0
                ) {
                    return res.status(400).json({
                        success: false,
                        error: 'Itens inválidos'
                    });
                }
            }

            const venda = await VendaDao.criarVendaCompleta({
                cd_cliente,
                cd_usuario,
                itens
            });


            return res.status(201).json({
                success: true,
                message: 'Venda criada com sucesso',
                data: {
                    ...venda.dataValues,
                    dt_venda: new Date(venda.dt_venda).toLocaleString('pt-BR', {
                        timeZone: 'America/Sao_Paulo'
                    }).replace(',', '')
                }
            });

        } catch (error) {
            console.error(error.message);

            return res.status(500).json({
                success: false,
                error: error.message || 'Erro ao criar venda'
            });
        }
    }

    async edit(req, res) {
        try {
            const { id } = req.params;
            const { cd_cliente, itens } = req.body;

            if (!id || isNaN(id)) {
                return res.status(400).json({
                    success: false,
                    error: 'ID inválido'
                });
            }

            if (!Array.isArray(itens) || itens.length === 0) {
                return res.status(400).json({
                    success: false,
                    error: 'Itens inválidos'
                });
            }

            const atualizado = await VendaDao.editarVenda(id, {
                cd_cliente,
                itens
            });

            if (!atualizado) {
                return res.status(404).json({
                    success: false,
                    error: 'Venda não encontrada'
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Venda atualizada com sucesso'
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                error: 'Erro ao editar venda'
            });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;

            if (!id || isNaN(id)) {
                return res.status(400).json({
                    success: false,
                    error: 'ID inválido'
                });
            }

            const deletado = await VendaDao.deletarVenda(id);

            if (!deletado) {
                return res.status(404).json({
                    success: false,
                    error: 'Venda não encontrada'
                });
            }

            return res.status(200).json({ message: "Venda deletada com Sucesso" });

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                error: 'Erro ao deletar venda'
            });
        }
    }
}

export default new VendaController();