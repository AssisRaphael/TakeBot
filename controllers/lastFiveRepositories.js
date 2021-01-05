const model = require('../models')

//Retorna os 5 repositórios de C# da take mais antigos no github
async function LastFiveRespositoriesCSharp() {
    const allRepositories = await model.getRepositories();
    let cSharpRepositories = allRepositories.filter(repository => repository.language == 'C#');
    let ordenedRepositories = cSharpRepositories.sort((rep,next) => {
        return new Date(rep.created_at) - new Date(next.created_at);
    });
    let lastFiveRepositories = ordenedRepositories.slice(0,6);
    return lastFiveRepositories;
}

module.exports = { LastFiveRespositoriesCSharp };