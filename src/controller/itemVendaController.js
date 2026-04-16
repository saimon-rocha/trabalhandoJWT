import ItemVendaDao from "../dao/ItemVendaDao.js";

class ItemVendaController {
    async index(req, res) {
        try {
            const dados = await ItemVendaDao.listarCompleto();

            const dadosFormatados = dados.map(i => ({
                ...i,
                dt_venda: new Date(i.dt_venda)
                    .toLocaleString('pt-BR', {
                        timeZone: 'America/Sao_Paulo'
                    })
                    .replace(',', '')
            }));

            return res.status(200).json({
                success: true,
                data: dadosFormatados
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                error: 'Erro ao listar itens'
            });
        }
    }

    async cad() { }
    async edit() { }
    async delete() { }
}

export default new ItemVendaController();