/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('activities_old').del();
  await knex('activities_old').insert([
    {
      description: 'Afastamento Doença',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 2,
      estimated_time: 0,
    },
    {
      description: 'Area Folha - Aperfeiçoamento',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 3,
      estimated_time: 0,
    },
    {
      description: 'Atualizando/Reiniciando Aplicações em PROD',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'Atualizando Ambiente de Testes',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'Auxílio Maternidade',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 2,
      estimated_time: 0,
    },
    {
      description: 'Classificando retorno de teste',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 4,
      estimated_time: 0,
    },
    {
      description: 'Conferindo/Assinando Relatório Ponto',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'Consulta Médica',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 2,
      estimated_time: 0,
    },
    {
      description: 'Contabil - Gerenciamento',
      activity_number: 2,
      activity_item: 0,
      activity_description: 2,
      my_time: 1,
      estimated_time: 0,
    },
    {
      description: 'DB2',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'Diretrizes - Outros',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 4,
      estimated_time: 0,
    },
    {
      description: 'Diretrizes - PDCA',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 1,
      estimated_time: 0,
    },
    {
      description: 'Estudo para versões futuras',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 4,
      estimated_time: 0,
    },
    {
      description: 'Feedback funcionários',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 1,
      estimated_time: 0,
    },
    {
      description: 'Feriado',
      activity_number: 0,
      activity_item: 0,
      activity_description: 0,
      my_time: 2,
      estimated_time: 0,
    },
    {
      description: 'Férias',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 2,
      estimated_time: 0,
    },
    {
      description: 'Folga Aniversário',
      activity_number: 0,
      activity_item: 0,
      activity_description: 0,
      my_time: 2,
      estimated_time: 0,
    },
    {
      description: 'Folga banco de horas',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 2,
      estimated_time: 0,
    },
    {
      description: 'Folga concedida pela Empresa',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 2,
      estimated_time: 0,
    },
    {
      description: 'Folga Funeral',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 2,
      estimated_time: 0,
    },
    {
      description: 'Folga Matrimônio',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 2,
      estimated_time: 0,
    },
    {
      description: 'Folga Paternidade',
      activity_number: 2,
      activity_item: 2,
      activity_description: 1,
      my_time: 2,
      estimated_time: 0,
    },
    {
      description: 'Iniciando e Configurando Ferramentas de Trabalho',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'Lanche',
      activity_number: 0,
      activity_item: 0,
      activity_description: 0,
      my_time: 1,
      estimated_time: 0,
    },
    {
      description: 'Merge e Deploy Liberação Versão/Arquivo',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'MyExpenses',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'my_time - Lançar tempos',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 4,
      estimated_time: 0,
    },
    {
      description: 'NE/SA',
      activity_number: 1,
      activity_item: 0,
      activity_description: 2,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'NE-Analisando NE',
      activity_number: 1,
      activity_item: 2,
      activity_description: 2,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'OnBalance OOB',
      activity_number: 2,
      activity_item: 2,
      activity_description: 2,
      my_time: 3,
      estimated_time: 0,
    },
    {
      description: 'ONVIO',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 3,
      estimated_time: 0,
    },
    {
      description: 'ONVIO/ONBALANCE - Anomalias',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 3,
      estimated_time: 0,
    },
    {
      description: 'Outros: Emails',
      activity_number: 2,
      activity_item: 2,
      activity_description: 2,
      my_time: 4,
      estimated_time: 0,
    },
    {
      description: 'Outros ** Evite Usar',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 1,
      estimated_time: 0,
    },
    {
      description: 'Participando de TOWN HALL',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 1,
      estimated_time: 0,
    },
    {
      description: 'Pesquisa',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'Pessoal',
      activity_number: 0,
      activity_item: 0,
      activity_description: 0,
      my_time: 1,
      estimated_time: 0,
    },
    {
      description: 'Phase 2 - Requirements and Planning',
      activity_number: 2,
      activity_item: 2,
      activity_description: 2,
      my_time: 3,
      estimated_time: 0,
    },
    {
      description: 'Phase 3 - Design',
      activity_number: 2,
      activity_item: 2,
      activity_description: 2,
      my_time: 3,
      estimated_time: 0,
    },
    {
      description: 'Phase 4 - Development',
      activity_number: 2,
      activity_item: 2,
      activity_description: 2,
      my_time: 3,
      estimated_time: 0,
    },
    {
      description: 'Phase 5 - Systems Testing',
      activity_number: 2,
      activity_item: 2,
      activity_description: 2,
      my_time: 3,
      estimated_time: 0,
    },
    {
      description: 'Projetos',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 4,
      estimated_time: 0,
    },
    {
      description: 'PSAI - Análise',
      activity_number: 1,
      activity_item: 0,
      activity_description: 2,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'RA',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 4,
      estimated_time: 0,
    },
    {
      description: 'RDM',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 4,
      estimated_time: 0,
    },
    {
      description: 'Registrando Atividades no Registro de Atividades',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'Respondendo Dúvida da Equipe',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'Reunião',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 4,
      estimated_time: 0,
    },
    {
      description: 'Reunião Daily/Weekly',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 4,
      estimated_time: 1,
    },
    {
      description: 'Reuniões de Versão (EBS)',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'SAI - Análise - Reunião de diversas SAIs',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 4,
      estimated_time: 1,
    },
    {
      description: 'SAI - Análise - Reunião de SAI especifica',
      activity_number: 1,
      activity_item: 0,
      activity_description: 0,
      my_time: 0,
      estimated_time: 1,
    },
    {
      description: 'SAI - Auxílio',
      activity_number: 2,
      activity_item: 0,
      activity_description: 2,
      my_time: 4,
      estimated_time: 0,
    },
    {
      description: 'SAI - CodeReview',
      activity_number: 2,
      activity_item: 2,
      activity_description: 2,
      my_time: 4,
      estimated_time: 1,
    },
    {
      description: 'Saída Particular',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 2,
      estimated_time: 0,
    },
    {
      description: 'SAIL-Analisando SAIL',
      activity_number: 1,
      activity_item: 2,
      activity_description: 2,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'SAI - Merge',
      activity_number: 1,
      activity_item: 2,
      activity_description: 0,
      my_time: 0,
      estimated_time: 1,
    },
    {
      description: 'SAI - Programação',
      activity_number: 1,
      activity_item: 1,
      activity_description: 2,
      my_time: 0,
      estimated_time: 1,
    },
    {
      description: 'SAI - Respondendo duvidas a gerencia de produtos',
      activity_number: 1,
      activity_item: 0,
      activity_description: 2,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'SAI - Respondendo duvidas ao Teste',
      activity_number: 1,
      activity_item: 0,
      activity_description: 2,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'SAI - Retornos',
      activity_number: 2,
      activity_item: 1,
      activity_description: 0,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'SAL-Analisando SAL',
      activity_number: 1,
      activity_item: 2,
      activity_description: 2,
      my_time: 4,
      estimated_time: 0,
    },
    {
      description: 'SAM-Analisando SAM',
      activity_number: 1,
      activity_item: 2,
      activity_description: 2,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'SCSQL',
      activity_number: 1,
      activity_item: 0,
      activity_description: 0,
      my_time: 4,
      estimated_time: 0,
    },
    {
      description: 'SQL (Auxílio)',
      activity_number: 1,
      activity_item: 0,
      activity_description: 0,
      my_time: 4,
      estimated_time: 0,
    },
    {
      description: 'SS',
      activity_number: 1,
      activity_item: 0,
      activity_description: 0,
      my_time: 4,
      estimated_time: 1,
    },
    {
      description: 'SS (Auxílio)',
      activity_number: 1,
      activity_item: 0,
      activity_description: 0,
      my_time: 1,
      estimated_time: 0,
    },
    {
      description: 'SSI',
      activity_number: 1,
      activity_item: 0,
      activity_description: 2,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'SSI (Auxílios)',
      activity_number: 1,
      activity_item: 2,
      activity_description: 1,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'Suporte',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 1,
      estimated_time: 0,
    },
    {
      description: 'Tarefas do SGD',
      activity_number: 1,
      activity_item: 0,
      activity_description: 2,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'Treinamento (fornecendo)',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 1,
      estimated_time: 0,
    },
    {
      description: 'Treinamento (recebendo)',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 1,
      estimated_time: 0,
    },
    {
      description: 'Utilitários',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'Validando roteiros de desenvolvimento',
      activity_number: 1,
      activity_item: 1,
      activity_description: 2,
      my_time: 0,
      estimated_time: 0,
    },
    {
      description: 'Versão',
      activity_number: 0,
      activity_item: 0,
      activity_description: 1,
      my_time: 4,
      estimated_time: 0,
    },
    {
      description: 'Versão - Auxiliando Destraves',
      activity_number: 0,
      activity_item: 0,
      activity_description: 2,
      my_time: 0,
      estimated_time: 0,
    },
  ]);
};
