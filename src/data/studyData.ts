

export interface StudyTopic {
  id: string;
  title: string;
  content: string;
  examples?: string[];
  fixationQuestions?: {
    question: string;
    options: string[];
    answer: number;
    explanation: string;
  }[];
}

export interface Subject {
  id: string;
  title: string;
  icon: string;
  topics: StudyTopic[];
}


export const subjects: Subject[] = [
  {
    id: 'seguridade-social',
    title: 'Conhecimentos Específicos',
    icon: 'ShieldCheck',
    topics: [
      {
        id: 'seg-1',
        title: '1. Seguridade Social',
        content: `
# 1. Seguridade Social

A Seguridade Social é o conjunto integrado de ações de iniciativa dos Poderes Públicos e da sociedade, destinadas a assegurar os direitos relativos à saúde, à previdência e à assistência social.

## 1.1 Origem e evolução legislativa no Brasil
*   **1824:** Socorros Públicos na primeira Constituição.
*   **1923 (Lei Eloy Chaves):** Criação das CAPs (Caixas de Aposentadorias e Pensões). Marco inicial da Previdência no Brasil.
*   **1933:** Criação dos IAPs (Institutos de Aposentadorias e Pensões) por categorias profissionais.
*   **1960 (LOPS):** Unificação da legislação previdenciária.
*   **1966:** Criação do INPS (Instituto Nacional de Previdência Social).
*   **1988:** Constituição Federal institui o conceito moderno de Seguridade Social (Saúde, Previdência e Assistência).

## 1.2 Conceituação
A Seguridade Social é um sistema de proteção social que abrange três áreas:
1.  **Saúde:** Direito de todos e dever do Estado (Universal e Gratuito).
2.  **Previdência Social:** Caráter contributivo e filiação obrigatória.
3.  **Assistência Social:** Prestada a quem dela necessitar (Independe de contribuição).

## 1.3 Organização e princípios constitucionais
*   **Universalidade da cobertura e do atendimento.**
*   **Uniformidade e equivalência dos benefícios e serviços às populações urbanas e rurais.**
*   **Seletividade e distributividade na prestação dos benefícios e serviços.**
*   **Irredutibilidade do valor dos benefícios.**
*   **Equidade na forma de participação no custeio.**
*   **Diversidade da base de financiamento.**
*   **Caráter democrático e descentralizado da administração.**
        `
      },
      {
        id: 'seg-2',
        title: '2. Legislação Previdenciária',
        content: `
# 2. Legislação Previdenciária

## 2.1 Conteúdo, fontes, autonomia
*   **Conteúdo:** Normas que regem o custeio e os benefícios da previdência.
*   **Fontes:** CF/88, Leis Ordinárias (8.212 e 8.213), Decretos (3.048), Instruções Normativas.
*   **Autonomia:** O Direito Previdenciário é um ramo autônomo do Direito Público.

## 2.2 Aplicação das normas previdenciárias
*   **2.2.1 Vigência, hierarquia, interpretação e integração:**
    *   **Vigência:** Inicia-se com a publicação ou após a vacatio legis.
    *   **Hierarquia:** A CF/88 é a norma suprema.
    *   **Interpretação:** Busca-se o sentido social da norma.
    *   **Integração:** Analogia, costumes e princípios gerais do direito.
        `
      },
      {
        id: 'seg-3',
        title: '3. Regime Geral (RGPS)',
        content: `
# 3. Regime Geral de Previdência Social (RGPS)

## 3.1 Segurados obrigatórios
Pessoas físicas que exercem atividade remunerada.

## 3.2 Filiação e inscrição
*   **Filiação:** Vínculo jurídico que gera direitos e deveres.
*   **Inscrição:** Ato formal de cadastramento.

## 3.3 Conceito, características e abrangência
*   **Empregado:** Trabalho subordinado, habitual e remunerado.
*   **Empregado Doméstico:** Trabalho em âmbito residencial sem fins lucrativos.
*   **Contribuinte Individual:** Profissional autônomo, empresário.
*   **Trabalhador Avulso:** Intermediação obrigatória (OGMO ou Sindicato).
*   **Segurado Especial:** Produtor rural, pescador artesanal (economia familiar).

## 3.4 Segurado facultativo
Pessoa maior de 16 anos que não exerce atividade remunerada mas decide contribuir.

## 3.5 Trabalhadores excluídos do Regime Geral
Servidores públicos estatutários vinculados a Regimes Próprios (RPPS).
        `
      },
      {
        id: 'seg-4-5',
        title: '4 e 5. Empresa e Financiamento',
        content: `
# 4. Empresa e Empregador Doméstico
*   **Empresa:** Firma individual ou sociedade que assume o risco da atividade econômica.
*   **Empregador Doméstico:** Aquele que admite empregado doméstico em sua residência.

# 5. Financiamento da Seguridade Social
A Seguridade é financiada por toda a sociedade.

## 5.1 Receitas da União
Recursos do orçamento fiscal.

## 5.2 Receitas das contribuições sociais
*   **Dos segurados:** Alíquotas progressivas (7,5% a 14%).
*   **Das empresas:** 20% sobre a folha + RAT + Terceiros.
*   **Do empregador doméstico:** 8% patronal.
*   **Do produtor rural:** Contribuição sobre a comercialização da produção.

## 5.3 Salário de contribuição
*   **5.3.1 Conceito:** Base de cálculo para a contribuição.
*   **5.3.2 Parcelas integrantes e não integrantes:** Verbas salariais (integram) vs. indenizatórias (não integram).
*   **5.3.3 Limites:** Mínimo (Salário Mínimo) e Máximo (Teto do INSS).

## 5.4 Arrecadação e recolhimento
*   **5.4.1 Competência:** Receita Federal do Brasil (RFB).
*   **5.4.3 Prazo:** Geralmente até o dia 20 do mês seguinte (para empresas).
        `
      },
      {
        id: 'seg-6-8',
        title: '6 a 8. Decadência, Crimes e Recursos',
        content: `
# 6. Decadência e Prescrição
*   **Decadência:** Perda do direito de revisar o ato de concessão (10 anos).
*   **Prescrição:** Perda do direito de cobrar parcelas vencidas (5 anos).

# 7. Crimes contra a seguridade social
*   Apropriação indébita previdenciária.
*   Sonegação de contribuição previdenciária.
*   Falsidade documental.

# 8. Recurso das decisões administrativas
O segurado pode recorrer das decisões do INSS ao Conselho de Recursos da Previdência Social (CRPS).
        `
      },
      {
        id: 'seg-9-11',
        title: '9 a 11. Benefícios e Serviços',
        content: `
# 9. Plano de Benefícios da Previdência Social
*   **Beneficiários:** Segurados e Dependentes.
*   **Carência:** Tempo mínimo de contribuição.
*   **Salário de benefício:** Média dos salários de contribuição.
*   **Renda mensal do benefício (RMI):** Valor final pago ao beneficiário.

# 10. Manutenção, perda e restabelecimento da qualidade de segurado
*   **Período de Graça:** Tempo em que mantém o direito sem contribuir (12, 24 ou 36 meses).

# 11. Serviços Previdenciários
*   **11.1 Serviço Social:** Orientação e apoio ao segurado.
*   **11.2 Reabilitação Profissional:** Readaptação do segurado incapacitado para o trabalho.
        `
      },
      {
        id: 'seg-12-14',
        title: '12 a 14. Pensões Especiais e LOAS',
        content: `
# 12. Benefícios decorrentes de legislações especiais
*   Pensão especial Talidomida, Seringueiros, Ex-combatente, Vítimas de Caruaru, Césio 137, Hanseníase, Zika Vírus.

# 13. Seguro desemprego pescador artesanal (Seguro Defeso)
Pago ao pescador durante o período de proibição da pesca para preservação das espécies.

# 14. Lei Orgânica da Assistência Social (LOAS)
*   **14.1 BPC:** Benefício de 1 salário mínimo para idosos (65+) e PcD de baixa renda.
*   **14.2 Auxílio-Inclusão:** Para PcD que recebe BPC e começa a trabalhar.
        `
      },
      {
        id: 'seg-15-23',
        title: '15 a 23. Regimes Próprios e Outros',
        content: `
# 15. Regimes Próprios de Previdência Social (RPPS)
*   Regimes dos servidores públicos efetivos.
*   **Contagem recíproca:** Compensação entre RGPS e RPPS.

# 16. Emenda Constitucional nº 103/2019
A última grande Reforma da Previdência, que alterou idades, alíquotas e regras de cálculo.

# 17 a 21. Legislação Complementar
*   LC 142/2013 (Aposentadoria PcD).
*   Leis 8.212, 8.213, Decreto 3.048 e IN 128/2022.

# 22 e 23. Desenvolvimento Social e Qualidade de Vida
*   O servidor como agente de transformação.
*   Programas de saúde e bem-estar no serviço público.
        `
      }
    ]
  },
  {
    id: 'portugues',
    title: 'Língua Portuguesa',
    icon: 'Languages',
    topics: [
      {
        id: 'port-1-2',
        title: '1 e 2. Compreensão e Tipologia',
        content: `
# 1. Compreensão e interpretação de textos
*   Análise de ideias explícitas e implícitas.
*   Coesão e coerência textual.

# 2. Tipologia textual
*   Narrativo, Descritivo, Dissertativo, Injuntivo e Expositivo.
        `
      },
      {
        id: 'port-3-5',
        title: '3 a 5. Ortografia, Acentuação e Classes',
        content: `
# 3. Ortografia oficial
*   Uso de letras, hífen e grafia correta.

# 4. Acentuação gráfica
*   Regras das oxítonas, paroxítonas e proparoxítonas.

# 5. Emprego das classes de palavras
*   Substantivo, adjetivo, pronome, verbo, advérbio, conjunção, preposição.
        `
      },
      {
        id: 'port-6-10',
        title: '6 a 10. Crase, Sintaxe, Pontuação e Regência',
        content: `
# 6. Emprego do sinal indicativo de crase
*   Regras de uso obrigatório, proibido e facultativo.

# 7. Sintaxe da oração e do período
*   Termos essenciais, integrantes e acessórios.

# 8. Pontuação
*   Uso da vírgula, ponto, dois-pontos, etc.

# 9. Concordância nominal e verbal
*   Relação de concordância entre nomes e verbos.

# 10. Regências nominal e verbal
*   Relação de dependência entre palavras.
        `
      },
      {
        id: 'port-11-12',
        title: '11 e 12. Significação e Redação Oficial',
        content: `
# 11. Significação das palavras
*   Sinônimos, antônimos, homônimos e parônimos.

# 12. Redação de correspondências oficiais
*   Manual de Redação da Presidência da República.
*   Ofício, Memorando, Exposição de Motivos.
        `
      }
    ]
  },
  {
    id: 'etica',
    title: 'Ética no Serviço Público',
    icon: 'Scale',
    topics: [
      {
        id: 'etica-1',
        title: '1. Código de Ética (Decreto 1.171/94)',
        content: `
# 1. Código de Ética Profissional
*   Regras deontológicas, deveres e vedações.
*   Comissão de Ética e penalidade de Censura.
*   Decreto nº 6.029/2007 (Sistema de Gestão da Ética).
        `
      }
    ]
  },
  {
    id: 'constitucional',
    title: 'Direito Constitucional',
    icon: 'Gavel',
    topics: [
      {
        id: 'const-1',
        title: '1. Direitos e Garantias Fundamentais',
        content: `
# 1. Direitos e Garantias Fundamentais
*   Direitos individuais e coletivos (Art. 5º).
*   Direitos sociais, nacionalidade e cidadania.
*   Garantias constitucionais.
        `
      },
      {
        id: 'const-2',
        title: '2. Administração Pública (Art. 37-41)',
        content: `
# 2. Administração Pública
*   Princípios (LIMPE).
*   Servidores públicos e regras constitucionais.
        `
      }
    ]
  },
  {
    id: 'administrativo',
    title: 'Direito Administrativo',
    icon: 'Building',
    topics: [
      {
        id: 'adm-1-3',
        title: '1 a 3. Estado e Organização',
        content: `
# 1. Estado, governo e administração pública
*   Conceitos, elementos e poderes.

# 2. Direito administrativo
*   Conceito, fontes e princípios.

# 3. Organização administrativa da União
*   Administração direta e indireta.
        `
      },
      {
        id: 'adm-4',
        title: '4. Agentes Públicos (Lei 8.112/90)',
        content: `
# 4. Agentes públicos
*   Espécies, classificação, poderes e deveres.
*   Regime Jurídico Único (Lei nº 8.112/1990).
*   Provimento, vacância, direitos e vantagens.
        `
      },
      {
        id: 'adm-5-7',
        title: '5 a 7. Poderes, Atos e Serviços',
        content: `
# 5. Poderes administrativos
*   Hierárquico, disciplinar, regulamentar e de polícia.

# 6. Ato administrativo
*   Validade, eficácia, atributos e extinção.

# 7. Serviços Públicos
*   Conceito, classificação e delegação (concessão/permissão).
        `
      },
      {
        id: 'adm-8-9',
        title: '8 e 9. Controle e Processo',
        content: `
# 8. Controle e responsabilização
*   Controle administrativo, judicial e legislativo.
*   Lei nº 8.429/1992 (Improbidade Administrativa).

# 9. Lei nº 9.784/1999
*   Lei do Processo Administrativo Federal.
        `
      }
    ]
  },
  {
    id: 'informatica',
    title: 'Informática',
    icon: 'Monitor',
    topics: [
      {
        id: 'info-1-2',
        title: '1 e 2. Internet e Modos de Uso',
        content: `
# 1. Conceitos de Internet e intranet
*   Redes, protocolos e navegação.

# 2. Conceitos básicos e modos de utilização
*   Tecnologias, ferramentas e procedimentos.
        `
      },
      {
        id: 'info-3-4',
        title: '3 e 4. LibreOffice e Windows',
        content: `
# 3. LibreOffice
*   Writer, Calc e Impress.

# 4. Sistemas operacionais Windows 7 e 10
*   Modos de utilização e ferramentas.
        `
      },
      {
        id: 'info-5-6',
        title: '5 e 6. E-mail e Segurança',
        content: `
# 5. Navegação e correio eletrônico
*   Ferramentas e aplicativos.

# 6. Noções básicas de segurança e proteção
*   Vírus, worms e derivados.
        `
      }
    ]
  },
  {
    id: 'raciocinio-logico',
    title: 'Raciocínio Lógico',
    icon: 'Calculator',
    topics: [
      {
        id: 'log-1-2',
        title: '1 e 2. Conceitos e Tautologia',
        content: `
# 1. Conceitos básicos de raciocínio lógico
*   Proposições, valores lógicos, conectivos.

# 2. Tautologia
*   Proposições sempre verdadeiras.
        `
      },
      {
        id: 'log-3-4',
        title: '3 e 4. Conjuntos e Porcentagem',
        content: `
# 3. Operação com conjuntos
*   União, interseção e diagramas.

# 4. Cálculos com porcentagens
*   Aumentos, descontos e variações.
        `
      }
    ]
  }
];

