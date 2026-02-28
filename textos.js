
const textos = {

// ======================
  // DIA DE NASCIMENTO (1–31)
  // Adaptado com Placeholder [NOME] e Tags <p>
  // ======================
  dia: {
    1:`<p><strong>Desbravador - Dia 1</strong></p>
<p>[NOME] é um pioneiro, um jogador, que tem uma grande ambição e um forte desejo de sucesso!</p>
<p>É altamente independente e não gosta das restrições ou de ter que trabalhar com outras pessoas. [NOME] se frustra facilmente com a rotina, mas é muito criativo e geralmente rápido de raciocínio.</p>
<p>Tem excelentes instintos principalmente para os negócios. [NOME] usa as informações para um propósito específico e normalmente em benefício próprio. A informação ou conhecimento são, para [NOME], um instrumento prático que permite obter suas realizações.</p>
<p>Tem uma grande força de vontade e possui uma visão ampla com uma grande capacidade para motivar os outros, o que proporciona a [NOME] muitas oportunidades e lhe permite ter um grande poder sobre as pessoas. Em geral, [NOME] está aberto a novas ideias e opiniões, mas pode ser uma pessoa extremamente teimosa.</p>
<p>Pelo lado negativo, quando [NOME] se sente frustrado ou vê que algo não se desenvolve como esperado, tende a agir de maneira afoita e forçar uma solução. Independentemente disso, sua determinação, força de vontade e inventividade são as chaves para o sucesso de [NOME] e provavelmente trarão muitas recompensas pessoais, assim como o sucesso financeiro.</p>`,

    2:`<p><strong>Pacificador - Dia 2</strong></p>
<p>[NOME] está ciente do que acontece ao seu redor e é facilmente influenciado pelas pessoas e pelo ambiente!</p>
<p>É uma pessoa muito sensível, instintiva e diplomática, mas sua sensibilidade torna [NOME] altamente emotivo e vulnerável às frustrações e decepções, podendo levar à falta de confiança e autoestima.</p>
<p>Os talentos de [NOME] estão na maneira como se relaciona com as pessoas e em sua flexibilidade. Consegue entender o que se passa na cabeça dos outros e geralmente pode se adaptar a fim de se manter em harmonia com elas, bem como ajudando outros a encontrarem uma área de concordância que satisfaça a todos. Sendo uma pessoa modesta e gentil, muito cooperativa e às vezes indecisa, [NOME] se desenvolve melhor em parcerias do que sozinho. Ao invés de ser o centro das atenções, [NOME] prefere estar nos bastidores e ser o "poder por trás do poder".</p>
<p>[NOME] é bom para dar continuidade às coisas, não para iniciá-las. Está sempre atento aos detalhes, o que permite perceber o que outra pessoa quer antes mesmo de ela dizer; por outro lado, [NOME] precisa de ambientes harmoniosos e pacíficos para que possa desenvolver todo seu potencial. Do contrário, pode ficar facilmente estressado e tenso, perdendo a concentração e o desempenho.</p>`,

    3:`<p><strong>Carismático - Dia 3</strong></p>
<p>[NOME] é amigável e sociável, mas pode ser temperamental e sujeito a variações de humor instantâneas!</p>
<p>É uma pessoa otimista, entusiasmada, muito imaginativa, esperta e que possui uma enorme habilidade para se expressar. Outros acham [NOME] inspirador e fascinante. [NOME] é um vendedor e um artista que pode se destacar em qualquer área que escolher, desde que não seja rotineira.</p>
<p>Apesar de aparentar ser irresponsável para os que não conhecem [NOME] bem, possui muito carisma. Tem um ótimo senso de harmonia e humor, mas pode ser temperamental e sujeito a altos e baixos inesperados. [NOME] não aceita ser criticado e tende a se envolver em inúmeras atividades ao mesmo tempo. Porém, quase sempre as deixará pela metade, estando sujeito a muitas frustrações.</p>
<p>Para ser feliz, [NOME] precisa apenas encontrar um meio de se exteriorizar; estar no meio de pessoas é essencial para sua realização. Mas [NOME] deve ter cuidado para não gastar tempo e energia em coisas banais e imediatistas, tendo como prioridade as realizações de longo prazo.</p>`,

    4:`<p><strong>Disciplinado - Dia 4</strong></p>
<p>[NOME] é altamente ético e possui princípios elevados. É uma pessoa disciplinada e responsável!</p>
<p>É um trabalhador esforçado e uma pessoa digna. Sendo detalhista, sistemático e preciso, [NOME] cuida de tudo o que faz e leva suas obrigações muito a sério. Pode ser orgulhoso, mas não arrogante. [NOME] é geralmente justo e tem compaixão pelas pessoas; preza as tradições, a família, e é um aliado fiel e confiável. No entanto, não sendo muito sentimental, [NOME] dificilmente demonstra seu afeto e procura perseverar diante de obstáculos e deficiências de sua personalidade.</p>
<p>O foco de [NOME] é seguir uma rotina. É alguém altamente racional e que não gosta de soluções geniais ou qualquer coisa que lhe pareça boa demais para ser verdade. A abordagem de [NOME] é tradicional, lenta e paciente, mas sólida e segura. [NOME] é um organizar e administrador nato. As pessoas confiam em sua regularidade e segurança, tanto que [NOME] é tido geralmente por todos como um porto seguro. Por outro lado, pode ser teimoso e inflexível. Sua natureza busca segurança, fazer o que pode e esperar, o que pode impedir [NOME] de aproveitar soluções ou ideias criativas.</p>`,

    5:`<p><strong>Independente - Dia 5</strong></p>
<p>[NOME] é altamente adaptável, curioso, se entedia facilmente e precisa aprender a ter disciplina e organização!</p>
<p>Normalmente [NOME] é divertido e alegre, muito ousado e de imaginação fértil; é um amante da liberdade que adora mudanças, novidades e aventuras. Tem uma curiosidade enorme e está sempre em busca de algo que lhe permita alcançar seus objetivos de forma mais fácil. Como um entusiasta da vida, [NOME] vive intensamente cada minuto dela, gosta de pessoas e de conviver com elas, se ajustando muito bem em qualquer lugar e situação.</p>
<p>O ambiente natural de [NOME] é o próprio mundo e, na sua visão, tudo é passageiro. É apenas uma questão de tempo até que [NOME] embarque em outra "aventura". Trabalha bem com os outros, desde que não haja muitas restrições. [NOME] pode ser um pouco irresponsável, impaciente e impulsivo, precisando aprender a ter disciplina e ordem para não exceder seus limites. Como tem uma mente rápida e analítica, pode ser muito confiante e obstinado, mas [NOME] é altamente criativo e pode encontrar soluções viáveis para a maioria dos problemas.</p>`,

    6:`<p><strong>Zeloso - Dia 6</strong></p>
<p>[NOME] é um zelador orientado para cuidar das pessoas e capaz de sacrificar seu próprio bem-estar para apoiá-las e ajudá-las!</p>
<p>A atenção de [NOME] está voltada para os relacionamentos. Quer participar da vida das pessoas próximas e ajudá-las em suas dificuldades. Normalmente [NOME] é muito sentimental, mas equilibrado, compreensivo e apegado à família, casa, amigos e filhos. Tem talento para resolver disputas entre as pessoas e propor um meio termo que satisfaça a todos, mas [NOME] necessita de atenção, elogio e proteção.</p>
<p>As críticas, por outro lado, causam em [NOME] uma impressão muito prejudicial. Precisa saber que é uma pessoa apreciada e que seu esforço é reconhecido. Sendo muito prático e econômico, [NOME] em geral é idealista, mas o medo da pobreza pode torná-lo muito cauteloso quanto a gastar, tornando-o muito apegado ao patrimônio pessoal. [NOME] é capaz de sacrificar seu próprio conforto para apoiar outros, mas as frustrações, principalmente as amorosas, podem ser muito prejudiciais.</p>`,

    7:`<p><strong>Perfeccionista - Dia 7</strong></p>
<p>[NOME] é exigente e difícil de se conhecer. Sendo introspectivo, tranquilo e analítico, o objetivo de [NOME] é sempre a perfeição!</p>
<p>Procura ver sempre o que há de melhor nas coisas, por outro lado esse perfeccionismo torna [NOME], em certo ponto, arredio a novidades e a novas amizades. A orientação de [NOME] é mais filosófica e deve se especializar em algo específico para fazer pleno uso de suas habilidades e dons intelectuais.</p>
<p>[NOME] tende a ser analítico, racional e desconfiado em suas abordagens. Para [NOME], as emoções são um terreno desconhecido no qual não se pode confiar, vendo as pessoas como imprevisíveis. Pode ser uma pessoa obstinada e teimosa. [NOME] tende a terminar tudo o que começa, mas prefere fazer tudo sozinho e definir seu próprio ritmo. Pode ser altamente crítico e egocêntrico, características que podem causar infelicidade a [NOME], especialmente nos relacionamentos. Sendo muito sensível, [NOME] se ressente profundamente, mas não compartilha seus sentimentos com facilidade.</p>`,

    8:`<p><strong>Original - Dia 8</strong></p>
<p>[NOME] é altamente competitivo e gosta de um desafio. As expectativas dos outros o estimulam, especialmente se duvidam de sua capacidade!</p>
<p>Prático, justo e leal, com grande senso de justiça e competência, [NOME] também pode ser muito generoso. Tem talento para os negócios e um bom senso de dinheiro. A abordagem da vida de [NOME] é original, criativa e ousada.</p>
<p>[NOME] tem muito bom senso, mas precisa de liberdade para exercê-lo, do contrário pode se tornar uma pessoa amarga e tirânica. É eficiente e pode lidar com grandes questões; com um caráter forte, [NOME] é realista, autoconfiante e voltado para objetivos. Mas se desenvolve melhor sozinho, pois parcerias limitam sua capacidade competitiva.</p>
<p>As pessoas confiam no julgamento de [NOME], pois sabem que podem confiar em suas decisões. Por outro lado, [NOME] precisa de status e poder, podendo ser dominador. Tem pouca paciência com fraquezas, sejam suas ou de outras pessoas. A atitude de [NOME] em relação às dificuldades será a diferença entre o sucesso e o fracasso.</p>`,

    9:`<p><strong>Universalista - Dia 9</strong></p>
<p>[NOME] é liberal e idealista. O desafio de [NOME] é encontrar seu lugar no mundo e para onde direcionar seus esforços!</p>
<p>Pode desempenhar um papel muito importante na sociedade, mas isso exigirá de [NOME] uma combinação de praticidade e ideologia. Sendo essencialmente impressionável, [NOME] se compadece por todos e, sendo generoso, deve tomar cuidado para não se doar em excesso a causas erradas. A orientação social permite que [NOME] se relacione com todos os tipos de pessoas, o que lhe dá o dom do encanto e o torna querido, mesmo que às vezes seja um pouco dramático.</p>
<p>[NOME] tem uma visão ampla das coisas, por outro lado, sua autoconfiança normalmente o faz protelar tudo. O maior defeito de [NOME] são os apegos negativos com situações apenas porque sente que estão sendo injustiçadas. Se [NOME] for capaz de se desligar das interferências do ambiente para encontrar seu espaço, terá muitas realizações.</p>`,

    10:`<p><strong>Ambicioso - Dia 10</strong></p>
<p>[NOME] é audacioso, progressista, prestativo e independente. Está sempre disposto a ajudar àqueles que lhe pedem auxílio!</p>
<p>Possui habilidades de liderança e um forte impulso para o sucesso. [NOME] é altamente ambicioso e anseia por independência. Consegue impulsionar quase tudo e, com sua determinação, encontra uma saída onde aparentemente não havia nenhuma. Para os outros, [NOME] parece dotado de grande força e poder, conseguindo assim a confiança de todos.</p>
<p>É um bom planejador e organizador, mas [NOME] pode ser teimoso e rígido quando se trata de ideias pelas quais se sente atraído. Mesmo assim, é um amigo leal, porém altamente competitivo e pode sentir inveja quando se trata do sucesso alheio. O maior desafio de [NOME] é ser capaz de viver de acordo com seus ideais, tendo a coragem necessária para superar os obstáculos. [NOME] se frustra com rotinas e pode ficar entediado se estiver muito apegado aos pequenos detalhes.</p>`,

    11:`<p><strong>Idealista - Dia 11</strong></p>
<p>[NOME] é um bom conselheiro e curador. Possui as qualidades de um visionário que aprecia e motiva as pessoas!</p>
<p>É uma pessoa idealista e instintiva. [NOME] pode ser muito inspirador, mas sendo altamente sensível e reativo, se magoa facilmente com críticas. Tem muita determinação e é capaz de entusiasmar outras pessoas com suas ideias. A presença de [NOME] é marcante; sendo um diplomata por excelência, possui o tato necessário para qualquer problema.</p>
<p>[NOME] tem grandes ideais e ambições. Não precisa de um motivo para agir, faz tudo por impulso e com grande energia. Muito instintivo, [NOME] toma decisões rápidas, porém é mais sonhador do que realizador. Seus interesses são inconstantes e tende a mudar de ideia no meio do caminho. Essa sensibilidade e inconstância podem tornar a vida de [NOME] bastante turbulenta.</p>`,

    12:`<p><strong>Comunicador - Dia 12</strong></p>
<p>[NOME] é altamente imaginativo e talentoso, especialmente nas habilidades verbais e de escrita. Mas pode ser temperamental e evasivo!</p>
<p>Possui um grande talento artístico que se manifesta em praticamente tudo o que faz. Para [NOME], a vida é literalmente uma festa. Tem muito entusiasmo, fica satisfeito com facilidade e tira o melhor proveito das situações.</p>
<p>É um idealista de personalidade cordial, quase sempre de bom humor. Como um comunicador nato, [NOME] consegue convencer facilmente as pessoas, mas como gosta de ser popular, tende a assumir mais compromissos do que pode dar conta. Dessa maneira, [NOME] vive atarefado e, sendo naturalmente impaciente, pode se deixar dominar pelo nervosismo. Como é íntegro em seus propósitos e leal, [NOME] pode chegar às alturas se não deixar que sua natureza emotiva atrapalhe.</p>`,

    13:`<p><strong>Prático - Dia 13</strong></p>
<p>[NOME] é um organizador e gerente natural, focado nos detalhes. É dotado de considerável perseverança e determinação!</p>
<p>Tem um grande apego à família e às tradições. [NOME] é uma pessoa prática que possui grande habilidade em transformar situações adversas, realizando sua parte com precisão. É meticuloso, autoritário, sistemático e econômico. Um trabalhador incansável, [NOME] está sempre lutando por seus objetivos e não poupa esforços para atingi-los.</p>
<p>Todos reconhecem a disciplina de [NOME] e confiam em suas habilidades, mas muitas vezes acaba sendo mal compreendido e considerado uma pessoa áspera por sua dificuldade em expressar sentimentos. A ousadia de [NOME] o leva a tomar atitudes ao invés de esperar, porém é muito influenciável pelo ambiente e pode vivenciar conflitos, tornando-se uma pessoa temperamental diante das incertezas.</p>`,

    14:`<p><strong>Aventureiro - Dia 14</strong></p>
<p>[NOME] é altamente adaptável, mas fica entediado facilmente e precisa do novo para se sentir vivo!</p>
<p>Adora mudanças e emoção. [NOME] é muito social e trabalha bem com os outros, desde que não haja restrições. Como é uma pessoa inquieta e volúvel, se desinteressa das coisas tão rápido quanto as deseja. É um jogador natural que pode ser muito confiante e teimoso.</p>
<p>Por trás da inquietação de [NOME] se esconde a insegurança; apesar de sua aparente calma, existe muita turbulência emocional que se reflete em mudanças rápidas de humor. Existem poucas coisas que [NOME] não seja capaz de fazer, mas sua natureza alterna entre a razão e a imaginação. Sendo bondoso e emotivo, [NOME] pode ser presa fácil dos inescrupulosos, mas controlando a impulsividade, poderá ser muito bem-sucedido financeiramente.</p>`,

    15:`<p><strong>Sedutor - Dia 15</strong></p>
<p>[NOME] é muito sensível, não suporta ser criticado e, por isso, tende a apoiar os outros a ponto de negar a si mesmo!</p>
<p>É uma pessoa altamente criativa, cooperativa e simpática. [NOME] gosta de ajudar e de assumir responsabilidades, porém é um ser indomável; quando reprimido, tem problemas de controle. [NOME] usa seu magnetismo ao extremo e todos acabam por achá-lo alguém afetuoso e interessante.</p>
<p>Normalmente [NOME] é o alvo das atenções e muito invejado por isso. Com calor humano, gosta de estar cercado por pessoas e se ajusta facilmente ao ambiente. [NOME] quer o melhor em sua vida e se esforça por isso. Adora reuniões sociais e não se importa em gastar com o que traz realização. Age como um ímã, atraindo as coisas para si. O compromisso afetivo é fundamental para manter a harmonia na vida de [NOME].</p>`,

    16:`<p><strong>Extremista - Dia 16</strong></p>
<p>[NOME] pode perder facilmente o interesse em seus projetos e deve trabalhar muito para terminar o que começou!</p>
<p>É uma pessoa analítica e cética; precisa ver para crer. [NOME] apresenta traços fortes de perfeccionismo e sua capacidade de compreensão lhe dá vantagem em desvendar situações. Sensível e inspirado, o grande defeito de [NOME] é querer que todos vivam conforme seus moldes, caso contrário torna-se mal-humorado e antipático. Esse temperamento faz com que [NOME] viva isolado, quando na verdade necessita de afeto.</p>
<p>[NOME] não aceita que ninguém interfira na sua vida. É muito analítico e capaz de se aprofundar em qualquer assunto. A mente de [NOME] é sua maior vantagem e seu pior inimigo. A grande armadilha é a escolha de se tornar alguém indiferente ou crítico demais, se afastando da realidade.</p>`,

    17:`<p><strong>Orgulhoso - Dia 17</strong></p>
<p>[NOME] é muito ambicioso e independente. O desafio é evitar ficar obcecado com o próprio julgamento e se tornar um ditador!</p>
<p>Muito independente, [NOME] tem um julgamento firme e equilibrado. Geralmente é bem-humorado e simpático. A abordagem de [NOME] para tudo é original, criativa e ousada. É um excelente administrador dotado da capacidade de ver o quadro geral.</p>
<p>Guiado pela racionalidade, [NOME] é autoconfiante e tem grandes expectativas de si mesmo. As expectativas dos outros estimulam [NOME], mas se duvidam de sua competência, isso fere o seu ego a ponto de fazê-lo assumir todo o controle para si. [NOME] pode agir de forma dramática, principalmente quando o assunto é dinheiro; nesse caso, torna-se possessivo e não descansará até que prove o seu poder.</p>`,

    18:`<p><strong>Contestador - Dia 18</strong></p>
<p>[NOME] é capaz de organizar e inspirar outras pessoas; sua satisfação mais profunda é realizar algo que beneficie o próximo!</p>
<p>É um líder natural e um gestor eficiente, podendo ser extremamente talentoso nas áreas política e social, pois [NOME] possui um excelente entendimento das pessoas. Dinâmico e ativo, deseja o poder e precisa de desafios constantes. [NOME] tem a mente aberta e um fascínio pelo mundo intelectual.</p>
<p>Apresenta um lado emocional, mas ainda assim [NOME] sempre será um contestador; sendo muito crítico, é difícil de ser agradado. Usa de sua personalidade marcante para ajudar seus semelhantes e resolver problemas alheios. [NOME] precisará de experiência e convívio com diferentes tipos de pessoas até encontrar sua área. No fundo, é um idealista que deseja melhorar as condições das pessoas.</p>`,

    19:`<p><strong>Individualista - Dia 19</strong></p>
<p>[NOME] é muito determinado e independente; é altamente idealista, mas se seus ideais falharem, pode se tornar amargo!</p>
<p>Anseia por independência e luta bravamente para alcançar a autossuficiência. O desafio de [NOME] é alcançar uma visão mais ampla sobre si mesmo e sobre os outros, superando a inclinação de se agarrar às ideias apenas por serem suas. A necessidade de ser alguém pode tornar [NOME] uma pessoa dramática, tentando ser sempre o centro das atenções.</p>
<p>É altamente ambicioso, com um forte desejo de sucesso e poder, e embora seja autoconfiante, [NOME] precisa ser encorajado e pode ser teimoso. Sendo radical nas atitudes, está sujeito a variações de humor extremas. Muito emotivo, [NOME] vive à beira do abismo, mas tem inúmeras habilidades para enfrentar dificuldades. As pessoas são atraídas pelo compromisso e firmeza que [NOME] coloca no trabalho.</p>`,

    20:`<p><strong>Consciente - Dia 20</strong></p>
<p>[NOME] tem a capacidade de persuadir os outros sob o seu ponto de vista, usando meios gentis. É brilhante em fazer os outros pensarem que são brilhantes!</p>
<p>É uma pessoa altamente sensível e consciente dos sentimentos alheios. Consequentemente, [NOME] é facilmente influenciado pelo ambiente e, sendo altamente emotivo, precisa desenvolver seu próprio centro. [NOME] dá carinho, mas precisa ser retribuído.</p>
<p>O talento de [NOME] está na perspicácia e disposição para agir como conselheiro. Sendo um estrategista, nada escapa à sua atenção. É estrategicamente modesto e diplomático, tendo grande capacidade de persuasão. [NOME] sabe dar e receber afeição, mas deve evitar ser dominado pelas emoções para não ser visto como alguém volúvel. Cultivando a autoconfiança, [NOME] entenderá o quão necessário é para todos.</p>`,

    21:`<p><strong>Disperso - Dia 21</strong></p>
<pApesar de ser idealista e liberal, [NOME] necessita da companhia de outras pessoas, pois disso depende o seu bem-estar!</p>
<p>É altamente criativo e muito sociável. Por outro lado, [NOME] não é muito discreto nem bom em guardar segredos, revelando tudo o que faz. Inspirador, [NOME] irradia vida e anima qualquer ambiente. É um excelente vendedor, mas como é muito disperso, o desafio de [NOME] é concentrar sua energia em algo específico.</p>
<p>Sendo muito emotivo, [NOME] oscila entre os extremos e está sujeito à depressão. Essa inconstância pode colocar obstáculos no caminho, mas no final [NOME] terá sucesso, pois sendo positivo, tem a certeza de que tudo acabará de forma favorável.</p>`,

    22:`<p><strong>Sonhador - Dia 22</strong></p>
<p>[NOME] tem o dom de ver os detalhes de como tudo deve se desenvolver. Ordeiro e paciente, aborda tudo de maneira metódica!</p>
<p>É um organizador com visão, mas contraditoriamente [NOME] pode ter um medo profundo de suas ambições. É detalhista, mas pouco prático. Tende a encontrar soluções únicas, mas [NOME] pode sentir que nada se compara à sua ideia original, duvidando da própria capacidade e abandonando coisas pela metade por medo do fracasso.</p>
<p>O desafio de [NOME] é tomar medidas práticas para concluir o que inicia. É um sonhador cujas ideias o fazem querer explorar vastos horizontes. [NOME] precisará de disciplina para manter os pés no chão, pois seu pensamento está sempre no futuro. O perfeccionismo pode impedir [NOME] de aproveitar as alegrias do dia a dia.</p>`,

    23:`<p><strong>Versátil - Dia 23</strong></p>
<p>Para [NOME], a vida é uma aventura a ser vivida ao máximo; adora mudanças e precisa delas para se sentir vivo!</p>
<p>É extremamente adaptável e tem um jeito fácil de se relacionar. [NOME] tem o dom de se comunicar e se promover, possuindo habilidade verbal e escrita. Trabalha bem com os outros, desde que não lhe imponham muitas regras. [NOME] é versátil, mas não muito persistente, pois fica inquieto facilmente.</p>
<p>É uma pessoa muito criativa, mas propenso a se esquivar da responsabilidade e se deixar levar pelos prazeres. [NOME] deve trabalhar o lado compreensivo para viver de forma estável. No fundo, é um idealista que faz uso dos sentimentos para expressar tudo de forma dramática. A instabilidade de humor faz com que [NOME] enfrente mais turbulências do que o necessário.</p>`,

    24:`<p><strong>Prestativo - Dia 24</strong></p>
<p>[NOME] é enérgico, responsável e prestativo, mas sua natureza solidária pode fazer com que enfrente dificuldades!</p>
<p>É uma pessoa dedicada às pessoas próximas e possui o dom de manter o equilíbrio entre elas. Sendo emotivo, [NOME] gosta de demonstrar afeto, às vezes de forma melodramática. Tende a aumentar os problemas, especialmente quando envolvem críticas pessoais, mas [NOME] está disposto a sacrificar o que for preciso pela harmonia.</p>
<p>Por sua natureza dramática, [NOME] não é muito prático e pode complicar as coisas, precisando de orientação alheia. Apesar disso, [NOME] se sai bem nas empreitadas por ser uma pessoa sistemática, cuidadosa e paciente. É um bom amigo e companheiro fiel. O defeito de [NOME] é a ansiedade constante por querer realizar sempre o que parece certo.</p>`,

    25:`<p><strong>Inconformado - Dia 25</strong></p>
<p>O sucesso é indispensável para a autoestima de [NOME]. Estabelece padrões de perfeição e fica deprimido se não os alcança!</p>
<p>É racional, lógico e quer saber tudo nos mínimos detalhes. [NOME] quer conhecer tudo profundamente e dificilmente toma decisões baseadas apenas nas aparências. Defende ferozmente suas convicções. Ambicioso, [NOME] luta para satisfazer seu desejo de moralidade e, sendo perfeccionista, acaba exigindo demais dos outros.</p>
<p>[NOME] é um diplomata que age de forma enérgica se necessário. O perfeccionismo leva [NOME] a trabalhar duro, porém pode perder o controle e tornar-se impaciente se as coisas não saem como planejado. O hábito de não expressar sentimentos faz com que [NOME] seja mal compreendido. O desafio é ser racional sem negligenciar as qualidades humanas.</p>`,

    26:`<p><strong>Controlador - Dia 26</strong></p>
<p>[NOME] pode ser muito diplomático e convincente. Prefere ser persuasivo em vez de impositivo!</p>
<p>É uma pessoa realista, autoconfiante e muito ambiciosa. [NOME] possui bom senso, mas quer estar no comando de tudo, pois pode ser dominador e autoritário. Tem pouca paciência com limitações alheias. [NOME] vê o potencial das coisas, mas pode negligenciar detalhes; às vezes se enche de entusiasmo, mas descobre que não será fácil terminar o que começou.</p>
<p>[NOME] é eficiente e capaz de lidar com grandes projetos por ser perseverante. Aparenta ser uma pessoa fria, quando na realidade está sempre pronto a ajudar. [NOME] deve aprender a avaliar suas relações para não pensar pouco em si mesmo. O desafio é manter o equilíbrio entre objetivos materiais e qualidades humanas.</p>`,

    27:`<p><strong>Político - Dia 27</strong></p>
<p>[NOME] é idealista, sensível e analítico. Sua mente fértil impressiona as pessoas através de ideias inusitadas!</p>
<p>Foi feito para guiar; [NOME] é um político nato, com equilíbrio entre instinto e razão. É alguém com visão incomum, original e criativo. [NOME] impressiona os outros por seus pensamentos, mas pode aparentar estar desconectado quando usa esse artifício para esconder conflitos internos.</p>
<p>Age por impulsividade e pode tornar-se uma pessoa desconfiada com mudanças. [NOME] é pacífico e jamais procura problemas, mas se for injustiçado, pode se tornar agressivo. Com personalidade audaciosa e independente, [NOME] não aceita dar satisfação dos seus atos. Sabe se expressar bem, embora às vezes de forma dramática.</p>`,

    28:`<p><strong>Obstinado - Dia 28</strong></p>
<p>[NOME] é uma pessoa geniosa, controversa e aberta a novas ideias. Nasceu com o dom do querer e vive se queixando de tudo!</p>
<p>Possui o dom de liderança através da persuasão. Extremamente ambicioso, independente e racional, [NOME] é um excelente planejador e possui autoconfiança, mas precisa de incentivo. Após iniciar algo, [NOME] prefere que outros deem continuidade, o que faz com que perca oportunidades satisfatórias por falta de manutenção dos projetos.</p>
<p>Pode ir até as últimas consequências para ter sucesso, mas [NOME] geralmente se desvia dos propósitos no caminho. Sendo uma pessoa controversa, [NOME] é um ímã para problemas, mas com sua determinação, estará sempre pronto para o combate e disposto a novos desafios.</p>`,

    29:`<p><strong>Instintivo - Dia 29</strong></p>
<p>[NOME] vivencia muitas oscilações emocionais. Por sua tendência à vulnerabilidade, tende a ver tudo de forma exagerada!</p>
<p>É altamente instintivo e criativo. A mente de [NOME] pensa em imagens e sua vida é conduzida mais pela inspiração do que pela razão. Este talvez seja o motivo pelo qual [NOME] acaba começando as coisas tardiamente e enfrenta frustrações pela aparente falta de progresso.</p>
<p>No fundo, é um visionário extremamente sensível e facilmente influenciável pelas pessoas e pelo ambiente. Não há meio termo para [NOME]: ou é muito bom no que faz, ou é muito ruim. Sendo muito emotivo, [NOME] se magoa com facilidade, o que o torna uma pessoa difícil de conviver. A menos que desenvolva seus próprios critérios de julgamento, [NOME] será escravo da opinião alheia.</p>`,

    30:`<p><strong>Teimoso - Dia 30</strong></p>
<p>[NOME] é teimoso! Tem sua própria opinião e estará sempre convencido de que seu modo de fazer as coisas é o único certo!</p>
<p>Tem um grande talento criativo e é altamente imaginativo, mas [NOME] tende a falar mais do que o necessário devido ao entusiasmo. Independentemente disso, é uma pessoa amigável e sociável; outros acham [NOME] carismático, embora às vezes cansativo.</p>
<p>É inútil qualquer discussão com [NOME], já que suas ideias são enraizadas e jamais estará disposto a mudá-las, assim como não aceita ordens. [NOME] é um vendedor de sonhos que odeia ser criticado. Sendo muito teimoso, pode tender à autoanulação se não for ouvido. [NOME] precisa se conscientizar de seu valor e se impor para conquistar o respeito das pessoas.</p>`,

    31:`<p><strong>Tradicionalista - Dia 31</strong></p>
<p>[NOME] pode ser teimoso e rígido, recusando-se a permitir ideias novas em seu apego aos padrões pré-estabelecidos!</p>
<p>Adora tudo o que é comprovado na prática. No entanto, [NOME] possui talento inventivo para buscar soluções práticas, pois necessita de segurança econômica. Com muita boa-fé, [NOME] confia em todos, acreditando na honestidade alheia, o que pode trazer problemas financeiros.</p>
<p>Jamais esquece um favor ou uma ofensa. [NOME] é muito sociável, um excelente anfitrião e se compadece com os problemas alheios. A capacidade de irradiar calor humano atrai as pessoas para [NOME]. É um organizador natural que trabalha duro e com consciência, possuindo uma força de vontade inabalável.</p>`,   
  },

// ======================
  // COMPORTAMENTO (1–9)
  // Adaptado com Placeholder [NOME] e Tags <p>
  // ======================
  comportamento: {
    1: `<p><strong>COMPORTAMENTO 1 — Determinado e Convicto</strong></p>
<p>O comportamento de [NOME] revela uma mente independente, reservada e fortemente orientada à autonomia emocional. [NOME] tende a lidar com dificuldades de forma solitária, preferindo encontrar soluções por conta própria em vez de pedir ajuda.</p>
<p>Existe uma forte necessidade de controle sobre a própria vida e decisões. Internamente, [NOME] busca provar a si mesmo que é capaz de superar qualquer obstáculo sem depender dos outros.</p>
<p><strong>Potenciais positivos:</strong></p>
<p>[NOME] possui grande força interior e capacidade de autossuperação, demonstrando coragem para enfrentar desafios sem recuar. Sua determinação, iniciativa e espírito de liderança fazem de [NOME] uma pessoa resiliente, honesta em suas emoções e capaz de assumir responsabilidades difíceis quando necessário.</p>
<p><strong>Desafios emocionais:</strong></p>
<p>Apesar da aparência forte, [NOME] tem tendência à autocrítica severa e dificuldade em reconhecer fragilidades. Para [NOME], pedir ajuda pode ser interpretado como fraqueza, o que leva ao isolamento emocional. A teimosia pode dificultar mudanças necessárias.</p>
<p><strong>Caminho de evolução:</strong></p>
<p>O crescimento de [NOME] acontece quando aprende a confiar nos outros e dividir responsabilidades. A verdadeira força de [NOME] não está em fazer tudo sozinho, mas em saber quando permitir apoio.</p>`,

    2: `<p><strong>COMPORTAMENTO 2 — Romântico e Emotivo</strong></p>
<p>O comportamento de [NOME] representa uma mente sensível, diplomática e altamente emocional. [NOME] reage aos conflitos buscando harmonia e evitando confrontos diretos.</p>
<p>[NOME] sente profundamente o ambiente e as emoções alheias, muitas vezes absorvendo sentimentos como se fossem próprios.</p>
<p><strong>Potenciais positivos:</strong></p>
<p>[NOME] tem uma empatia admirável e capacidade natural de compreender os outros. Com talento para a diplomacia e uma intuição aguçada, [NOME] facilita a cooperação e o trabalho em equipe, sendo uma pessoa conciliadora que busca paz e equilíbrio nas relações.</p>
<p><strong>Desafios emocionais:</strong></p>
<p>A insegurança e a necessidade de aprovação podem gerar dependência emocional em [NOME]. O medo do conflito pode levar [NOME] a fugir de problemas importantes, gerando ansiedade ou dificuldade em tomar decisões firmes.</p>
<p><strong>Caminho de evolução:</strong></p>
<p>O crescimento de [NOME] surge quando aprende a confiar em si mesmo e desenvolver firmeza emocional. A harmonia verdadeira exigirá de [NOME] coragem para enfrentar conflitos quando necessário.</p>`,

    3: `<p><strong>COMPORTAMENTO 3 — Otimista e Despreocupado</strong></p>
<p>O comportamento de [NOME] revela uma mente leve, criativa e orientada à expressão. [NOME] reage aos desafios com entusiasmo, criatividade e excelente comunicação.</p>
<p>As dificuldades são frequentemente enfrentadas por [NOME] com humor, charme e uma grande capacidade de adaptação.</p>
<p><strong>Potenciais positivos:</strong></p>
<p>[NOME] possui um poder de persuasão natural e pensamento flexível. Capaz de motivar e inspirar pessoas, [NOME] demonstra um otimismo contagiante diante das adversidades, sendo uma presença carismática que influencia qualquer ambiente positivamente.</p>
<p><strong>Desafios emocionais:</strong></p>
<p>[NOME] pode apresentar tendência à superficialidade ou dispersão. Às vezes, [NOME] evita encarar problemas diretamente, preferindo distrações. O excesso de otimismo pode fazer com que [NOME] tenha dificuldade em manter a disciplina.</p>
<p><strong>Caminho de evolução:</strong></p>
<p>O equilíbrio para [NOME] surge quando a sua criatividade transbordante é direcionada com foco, responsabilidade e persistência.</p>`,

    4: `<p><strong>COMPORTAMENTO 4 — Prudente, Observador e Resistente</strong></p>
<p>O comportamento de [NOME] indica uma postura psicológica analítica diante da vida. Quando confrontado com desafios, [NOME] tende a reagir com cautela, disciplina e necessidade de segurança. Sua resposta emocional é baseada na lógica e na busca por estabilidade.</p>
<p><strong>Aspectos positivos:</strong></p>
<p>Psicologicamente, [NOME] reage às dificuldades com firmeza e resistência emocional. [NOME] prefere enfrentar os problemas com planejamento e acredita no esforço contínuo. É alguém que observa antes de agir, valoriza a previsibilidade e prefere soluções práticas.</p>
<p>Em momentos difíceis, [NOME] se fortalece através da rotina e da organização. Sua segurança emocional nasce da sensação de estrutura.</p>
<p><strong>Aspectos negativos:</strong></p>
<p>Quando em desequilíbrio, [NOME] reage ao medo criando rigidez emocional. Pode se tornar uma pessoa excessivamente teimosa, defensiva ou pessimista. [NOME] pode tentar controlar tudo ao redor, desenvolvendo ansiedade quando as coisas saem do planejado.</p>
<p><strong>Desenvolvimento psicológico:</strong></p>
<p>O aprendizado de [NOME] é desenvolver flexibilidade emocional. Quando [NOME] aprende a confiar mais na vida e menos no controle absoluto, transforma sua resistência em verdadeira força interior.</p>`,

    5: `<p><strong>COMPORTAMENTO 5 — Impulsivo, Adaptável e Inquieto</strong></p>
<p>O comportamento de [NOME] reage à vida através do movimento, da curiosidade e da necessidade de liberdade. Diante de dificuldades, [NOME] prefere agir rapidamente, experimentar e mudar de direção se necessário.</p>
<p><strong>Aspectos positivos:</strong></p>
<p>Psicologicamente, [NOME] responde ao estresse com ação e adaptação. Ao invés de se prender ao problema, [NOME] busca novas possibilidades. É alguém de mente aberta que aprende com as experiências e não teme o desconhecido. A força emocional de [NOME] está na capacidade de recomeçar sempre.</p>
<p><strong>Aspectos negativos:</strong></p>
<p>Em desequilíbrio, [NOME] pode reagir com impulsividade e instabilidade emocional. Existe o risco de [NOME] evitar lidar profundamente com problemas, preferindo escapar através de distrações ou mudanças constantes e impensadas.</p>
<p><strong>Desenvolvimento psicológico:</strong></p>
<p>O crescimento de [NOME] está em aprender disciplina emocional. Quando [NOME] equilibra sua sede de liberdade com responsabilidade, transforma sua inquietação em evolução contínua.</p>`,

    6: `<p><strong>COMPORTAMENTO 6 — Afetivo, Protetor e Sensível</strong></p>
<p>O comportamento de [NOME] responde às dificuldades através do cuidado, do afeto e da necessidade de proteger quem ama.</p>
<p><strong>Aspectos positivos:</strong></p>
<p>Psicologicamente, [NOME] reage buscando harmonia. Sua primeira reação diante de conflitos é tentar cuidar, conciliar e proteger. [NOME] valoriza profundamente os vínculos afetivos, tem grande empatia e procura resolver qualquer impasse com amor e acolhimento.</p>
<p>A força emocional de [NOME] está diretamente ligada ao seu sentimento de pertencimento e família.</p>
<p><strong>Aspectos negativos:</strong></p>
<p>Quando em desequilíbrio, [NOME] pode manifestar dependência emocional ou necessidade excessiva de aprovação. [NOME] pode se sentir rejeitado com facilidade ou assumir responsabilidades emocionais que não lhe pertencem, sobrecarregando-se.</p>
<p><strong>Desenvolvimento psicológico:</strong></p>
<p>[NOME] precisa aprender autovalorização e limites. Quando [NOME] equilibra o cuidado com os outros com a própria autonomia, transforma seu amor em uma força emocional inabalável.</p>`,

    7: `<p><strong>COMPORTAMENTO 7 — Reservado, Analítico e Introspectivo</strong></p>
<p>O comportamento de [NOME] reage às dificuldades através da introspecção, reflexão e necessidade de compreensão profunda.</p>
<p><strong>Aspectos positivos:</strong></p>
<p>Psicologicamente, [NOME] prefere se afastar para pensar antes de agir. Busca compreender o significado oculto das experiências. [NOME] analisa profundamente os problemas, desenvolve um forte autocontrole e valoriza a sabedoria. Sua força está na capacidade de observar o que os outros não veem.</p>
<p><strong>Aspectos negativos:</strong></p>
<p>Quando em desequilíbrio, [NOME] pode se isolar emocionalmente ou reprimir demais seus sentimentos. [NOME] pode tornar-se uma pessoa excessivamente crítica ou desconfiada, usando o distanciamento como uma armadura contra conflitos.</p>
<p><strong>Desenvolvimento psicológico:</strong></p>
<p>[NOME] precisa aprender a conexão emocional e a confiança. Quando [NOME] equilibra sua mente brilhante com a emoção, transforma sua capacidade de análise em pura sabedoria de vida.</p>`,

    8: `<p><strong>COMPORTAMENTO 8 — Controlador, Estratégico e Resiliente</strong></p>
<p>O comportamento de [NOME] reage às dificuldades buscando controle, poder pessoal e resultados concretos.</p>
<p><strong>Aspectos positivos:</strong></p>
<p>Psicologicamente, [NOME] enfrenta desafios com determinação e uma resistência invejável. [NOME] não foge de problemas — encara e resolve. Age com estratégia, mantém o autocontrole sob pressão e busca segurança tanto material quanto emocional.</p>
<p>A força de [NOME] reside na sua capacidade executiva e na sua resiliência diante das crises.</p>
<p><strong>Aspectos negativos:</strong></p>
<p>Em desequilíbrio, [NOME] pode tornar-se uma pessoa controladora, autoritária ou impaciente. [NOME] corre o risco de ficar obcecado por resultados, tentando controlar as pessoas ao redor como forma de lidar com seus próprios receios.</p>
<p><strong>Desenvolvimento psicológico:</strong></p>
<p>[NOME] precisa aprender confiança e flexibilidade. Quando [NOME] equilibra sua força e autoridade com sensibilidade, torna-se um líder equilibrado e admirado.</p>`,

    9: `<p><strong>COMPORTAMENTO 9 — Intenso, Idealista e Emocional</strong></p>
<p>O comportamento de [NOME] reage às dificuldades com intensidade emocional e um forte senso de justiça.</p>
<p><strong>Aspectos positivos:</strong></p>
<p>Psicologicamente, [NOME] enfrenta problemas movido por valores e ideais profundos. [NOME] possui uma empatia vasta, deseja genuinamente ajudar o próximo e reage com coragem a qualquer injustiça. Sua força está na paixão que dedica à vida e às pessoas.</p>
<p><strong>Aspectos negativos:</strong></p>
<p>Quando em desequilíbrio, [NOME] pode ter explosões emocionais ou guardar ressentimentos. [NOME] pode sofrer com oscilações de humor e ter dificuldade em desapegar de situações passadas, reagindo de forma exagerada às frustrações.</p>
<p><strong>Desenvolvimento psicológico:</strong></p>
<p>[NOME] precisa aprender o equilíbrio emocional e a arte do desapego. Quando [NOME] amadurece essa intensidade, transforma seus sentimentos em uma profunda sabedoria humanitária.</p>`
  },

// ======================
  // MOTIVAÇÃO (1–9)
  // Adaptado com Placeholder [NOME] e Tags <p>
  // ======================
  Motivacao: {
    1: `<p><strong>[NOME]</strong> possui uma necessidade profunda de independência e autonomia. Sua maior motivação é dirigir a própria vida e tomar decisões baseadas em suas convicções pessoais.</p>
<p>Existe dentro de <strong>[NOME]</strong> um forte impulso de liderança e a sensação de que precisa estar no controle do próprio destino. Essa força interior lhe concede coragem para assumir responsabilidades, tomar decisões ousadas e iniciar caminhos que outras pessoas evitariam. <strong>[NOME]</strong> não teme desafios e, muitas vezes, até se fortalece diante deles.</p>
<p>A rotina e a dependência tendem a sufocar sua energia. Quando acredita em algo, <strong>[NOME]</strong> demonstra determinação incomum. No entanto, o excesso de autossuficiência pode torná-lo rígido. Seu desafio é equilibrar independência com cooperação, aprendendo a liderar sem se isolar.</p>`,

    2: `<p>A motivação central de <strong>[NOME]</strong> é viver em harmonia, sentir-se amado e construir relações profundas e significativas. <strong>[NOME]</strong> busca conexão emocional, parceria e reconhecimento afetivo.</p>
<p>Existe uma necessidade genuína de ser útil e contribuir para a paz ao seu redor. Evitar conflitos é quase instintivo para <strong>[NOME]</strong>, pois a tensão causa grande desconforto. Essa sensibilidade faz de <strong>[NOME]</strong> um conciliador natural, capaz de perceber nuances que passam despercebidas para outros.</p>
<p>Seu crescimento acontece quando <strong>[NOME]</strong> aprende a confiar na própria força e a expressar suas necessidades com segurança, tornando-se um poderoso agente de união e empatia.</p>`,

    3: `<p>A motivação de <strong>[NOME]</strong> é experimentar a alegria de viver, expressar sua criatividade e ser reconhecido pelo seu brilho pessoal. Existe um impulso forte para se comunicar, inspirar e compartilhar entusiasmo.</p>
<p><strong>[NOME]</strong> deseja viver em ambientes agradáveis, cercado por experiências que alimentem sua imaginação. Possui talento natural para a expressão e encontra satisfação ao transmitir ideias e emoções.</p>
<p>O maior aprendizado para <strong>[NOME]</strong> é desenvolver foco e disciplina sem perder a leveza e o entusiasmo que fazem parte da sua essência fundamental.</p>`,

    4: `<p>A motivação principal de <strong>[NOME]</strong> é construir estabilidade, segurança e estrutura. <strong>[NOME]</strong> sente necessidade de organizar, planejar e criar bases sólidas para o futuro.</p>
<p>Existe um forte desejo de ser confiável e respeitado pelo seu esforço. A previsibilidade traz tranquilidade para <strong>[NOME]</strong> e a disciplina é sua aliada natural. Contudo, o excesso de rigidez pode limitar sua flexibilidade emocional.</p>
<p>O crescimento de <strong>[NOME]</strong> acontece quando aprende a equilibrar essa busca por segurança com uma maior abertura ao novo e ao inesperado.</p>`,

    5: `<p><strong>[NOME]</strong> é movido pela liberdade, pela variedade e pela experiência direta. A rotina prolongada gera em <strong>[NOME]</strong> uma inquietação e sensação de aprisionamento.</p>
<p>Sua motivação é explorar, experimentar e viver intensamente. Mudanças e desafios estimulam a mente e a energia vital de <strong>[NOME]</strong>. O risco existe quando a busca por novidades impede a conclusão de projetos.</p>
<p>O aprendizado de <strong>[NOME]</strong> é encontrar o ponto de equilíbrio ideal entre a aventura que tanto ama e o compromisso necessário para suas realizações.</p>`,

    6: `<p>A motivação de <strong>[NOME]</strong> nasce do desejo de amar, cuidar e proteger. Família, vínculos e responsabilidade emocional são os pilares centrais da vida de <strong>[NOME]</strong>.</p>
<p>Existe uma forte necessidade de sentir-se útil e necessário para aqueles que ama. Porém, o excesso de responsabilidade pode gerar sobrecarga emocional em <strong>[NOME]</strong>.</p>
<p>Seu crescimento ocorre quando <strong>[NOME]</strong> aprende a cuidar de si mesmo com a mesma dedicação e carinho que oferece generosamente aos outros.</p>`,

    7: `<p><strong>[NOME]</strong> é motivado pela busca do conhecimento, da verdade e da compreensão profunda dos mistérios da vida. Existe um impulso interior para analisar e estudar o mundo em níveis mais profundos.</p>
<p><strong>[NOME]</strong> valoriza o silêncio, a introspecção e a reflexão solitária. Sua mente busca respostas onde outros veem apenas o óbvio.</p>
<p>O desafio para <strong>[NOME]</strong> é equilibrar a razão com a emoção, permitindo-se conectar de forma mais calorosa e profunda com as pessoas ao seu redor.</p>`,

    8: `<p>A motivação de <strong>[NOME]</strong> está ligada ao sucesso, à realização material e ao reconhecimento de suas capacidades. Existe um forte impulso de conquistar resultados concretos e exercer liderança.</p>
<p><strong>[NOME]</strong> deseja deixar marcas visíveis e duradouras no mundo. Sua ambição é o motor que o impulsiona para grandes feitos.</p>
<p>O desafio de <strong>[NOME]</strong> é equilibrar essa busca por poder e eficiência com a sensibilidade e um propósito humano mais elevado.</p>`,

    9: `<p>A motivação de <strong>[NOME]</strong> é servir, contribuir e causar um impacto positivo e transformador no mundo. Existe uma forte inclinação humanitária e um desejo genuíno de ajudar.</p>
<p><strong>[NOME]</strong> sente profunda satisfação ao contribuir para algo maior do que si mesmo, enxergando o sofrimento alheio como um chamado à ação.</p>
<p>O aprendizado de <strong>[NOME]</strong> está em equilibrar esse altruísmo nobre com o estabelecimento de limites saudáveis para preservar sua própria energia.</p>`
  },

  // ======================
  // INFLUÊNCIA (1–9)
  // Adaptado com Placeholder [NOME] e Tags <p>
  // ======================
  Influencia: {
    1: `<p><strong>Influência 1 — Aparência de Liderança, Autoconfiança e Individualidade</strong></p>
<p><strong>[NOME]</strong> transmite a imagem de uma pessoa dinâmica, eficiente e extremamente segura. Em um primeiro contato, pode ser percebido como um líder natural, direto e com ideias originais.</p>
<p>A presença de <strong>[NOME]</strong> sugere que não se deixa intimidar facilmente e que possui controle para enfrentar desafios. Os outros enxergam <strong>[NOME]</strong> como alguém que sabe o que quer e que possui sua própria maneira de agir.</p>
<p><strong>Aspectos positivos:</strong> <strong>[NOME]</strong> aparenta força, iniciativa e independência, inspirando firmeza nas decisões alheias.</p>
<p><strong>Aspectos negativos:</strong> Pode aparentar arrogância ou excesso de individualismo. Algumas pessoas podem sentir que <strong>[NOME]</strong> parece inacessível.</p>
<p><strong>Equilíbrio:</strong> O desafio de <strong>[NOME]</strong> é desenvolver sensibilidade e cooperação, tornando sua imagem mais acolhedora.</p>`,

    2: `<p><strong>Influência 2 — Aparência de Sensibilidade, Diplomacia e Receptividade</strong></p>
<p><strong>[NOME]</strong> transmite uma imagem sutil, gentil e cordial. As pessoas costumam percebê-lo como alguém amigável e fácil de se aproximar, despertando simpatia imediata.</p>
<p>Sua influência cria a impressão de alguém paciente, capaz de ouvir com empatia. As pessoas sentem-se confortáveis ao lado de <strong>[NOME]</strong>, pois sua postura transmite acolhimento e respeito.</p>
<p><strong>Aspectos positivos:</strong> <strong>[NOME]</strong> aparenta gentileza, paciência e harmonia, sendo visto como um mediador natural.</p>
<p><strong>Aspectos negativos:</strong> Pode aparentar insegurança ou passividade. Alguns podem subestimar a força interior de <strong>[NOME]</strong>.</p>
<p><strong>Equilíbrio:</strong> O desafio de <strong>[NOME]</strong> é desenvolver firmeza e autoconfiança sem perder sua diplomacia nata.</p>`,

    3: `<p><strong>Influência 3 — Aparência de Carisma, Alegria e Expressividade</strong></p>
<p><strong>[NOME]</strong> transmite uma imagem vibrante, leve e cheia de vida. As pessoas o percebem como alguém divertido, comunicativo e inspirador, chamando atenção naturalmente.</p>
<p>A influência de <strong>[NOME]</strong> traz leveza aos ambientes. Os outros o enxergam como alguém espontâneo e capaz de enfrentar dificuldades com bom humor e magnetismo pessoal.</p>
<p><strong>Aspectos positivos:</strong> <strong>[NOME]</strong> aparenta alegria, criatividade e entusiasmo, despertando interesse imediato nas pessoas.</p>
<p><strong>Aspectos negativos:</strong> Pode aparentar superficialidade ou dispersão. Pode surgir a impressão de que <strong>[NOME]</strong> evita responsabilidades sérias.</p>
<p><strong>Equilíbrio:</strong> O desafio de <strong>[NOME]</strong> é desenvolver foco e constância para que seu carisma seja acompanhado de admiração profunda.</p>`,

    4: `<p><strong>Influência 4 — Aparência de Segurança, Estabilidade e Confiabilidade</strong></p>
<p><strong>[NOME]</strong> transmite a imagem de uma pessoa séria, responsável e extremamente confiável. Desde o primeiro contato, os outros percebem em <strong>[NOME]</strong> alguém estável e disciplinado.</p>
<p>Sua influência sugere organização e compromisso. É comum que <strong>[NOME]</strong> seja visto como uma figura de proteção, que valoriza a justiça, a honestidade e a estabilidade prática.</p>
<p><strong>Aspectos positivos:</strong> Transmite confiabilidade e senso de dever, inspirando profundo respeito e segurança.</p>
<p><strong>Aspectos negativos:</strong> Pode aparentar rigidez, excesso de formalidade ou certa resistência a mudanças repentinas.</p>
<p><strong>Equilíbrio:</strong> O desafio de <strong>[NOME]</strong> é desenvolver flexibilidade. Quando equilibra disciplina com abertura, sua imagem torna-se ainda mais poderosa.</p>`,

    5: `<p><strong>Influência 5 — Aparência de Liberdade, Versatilidade e Movimento</strong></p>
<p><strong>[NOME]</strong> transmite a imagem de alguém livre, moderno e cheio de energia. As pessoas o percebem como um ser curioso, comunicativo e sempre interessado em novidades.</p>
<p>A presença de <strong>[NOME]</strong> sugere dinamismo e facilidade de adaptação. Sua conversa costuma ser envolvente e estimulante, despertando a curiosidade de quem o rodeia.</p>
<p><strong>Aspectos positivos:</strong> Carisma, adaptabilidade e versatilidade são as marcas registradas da imagem de <strong>[NOME]</strong>.</p>
<p><strong>Aspectos negativos:</strong> Essa energia pode gerar uma impressão de instabilidade, inquietude ou falta de compromisso a longo prazo.</p>
<p><strong>Equilíbrio:</strong> O aprendizado de <strong>[NOME]</strong> é demonstrar constância e responsabilidade sem precisar abrir mão de sua preciosa liberdade.</p>`,

    6: `<p><strong>Influência 6 — Aparência de Cuidado, Proteção e Responsabilidade Emocional</strong></p>
<p><strong>[NOME]</strong> transmite uma imagem acolhedora, calorosa e profundamente humana. As pessoas percebem em <strong>[NOME]</strong> alguém compreensivo e disposto a ajudar.</p>
<p>Existe na influência de <strong>[NOME]</strong> uma aura de proteção. Os outros sentem que podem compartilhar problemas e buscar conselhos, vendo em <strong>[NOME]</strong> um porto seguro emocional.</p>
<p><strong>Aspectos positivos:</strong> <strong>[NOME]</strong> aparenta generosidade, empatia e equilíbrio, transmitindo segurança nas relações.</p>
<p><strong>Aspectos negativos:</strong> Pode aparentar excesso de preocupação ou dificuldade em dizer "não", sacrificando-se demais pelos outros.</p>
<p><strong>Equilíbrio:</strong> O desafio de <strong>[NOME]</strong> é estabelecer limites saudáveis para que seu cuidado não se torne uma sobrecarga pessoal.</p>`,

    7: `<p><strong>Influência 7 — Aparência de Mistério, Intelecto e Profundidade</strong></p>
<p><strong>[NOME]</strong> transmite uma imagem reservada, observadora e intelectual. As pessoas costumam percebê-lo como alguém sério, introspectivo e seletivo, o que desperta respeito.</p>
<p>Existe uma aura de mistério em <strong>[NOME]</strong>. Os outros o enxergam como alguém analítico, que valoriza a sabedoria e não se contenta com conversas ou interações superficiais.</p>
<p><strong>Aspectos positivos:</strong> Transmite sabedoria, inteligência profunda e uma capacidade de análise muito acima da média.</p>
<p><strong>Aspectos negativos:</strong> Pode aparentar distanciamento ou frieza, fazendo com que <strong>[NOME]</strong> pareça inacessível para alguns.</p>
<p><strong>Equilíbrio:</strong> O desafio de <strong>[NOME]</strong> é desenvolver abertura emocional, permitindo que as pessoas se aproximem de sua mente brilhante.</p>`,

    8: `<p><strong>Influência 8 — Aparência de Autoridade, Poder e Realização</strong></p>
<p><strong>[NOME]</strong> transmite a imagem de alguém forte, ambicioso e determinado. As pessoas o veem como alguém capaz de liderar grandes projetos e alcançar resultados concretos.</p>
<p>Sua presença sugere competência técnica e domínio das situações. É comum que <strong>[NOME]</strong> seja visto como alguém influente e apto a assumir grandes responsabilidades.</p>
<p><strong>Aspectos positivos:</strong> Liderança nata, poder pessoal e uma determinação que impulsiona todos ao seu redor.</p>
<p><strong>Aspectos negativos:</strong> Pode ser percebido como alguém de rigidez excessiva ou que foca demais nos resultados e pouco nas pessoas.</p>
<p><strong>Equilíbrio:</strong> O aprendizado de <strong>[NOME]</strong> é equilibrar seu poder de realização com doses de empatia e sensibilidade humana.</p>`,

    9: `<p><strong>Influência 9 — Aparência de Humanitarismo, Carisma e Idealismo</strong></p>
<p><strong>[NOME]</strong> transmite generosidade, sensibilidade e uma visão ampla da vida. As pessoas o percebem como alguém inspirador e profundamente preocupado com o bem coletivo.</p>
<p>A influência de <strong>[NOME]</strong> cria a imagem de alguém compreensivo e tolerante, capaz de enxergar além das aparências e das diferenças individuais.</p>
<p><strong>Aspectos positivos:</strong> Empatia vasta e uma capacidade de inspirar os outros através de seu exemplo de generosidade.</p>
<p><strong>Aspectos negativos:</strong> Pode aparentar um idealismo excessivo que, às vezes, parece desconectado das necessidades práticas do momento.</p>
<p><strong>Equilíbrio:</strong> O desafio de <strong>[NOME]</strong> é equilibrar seus grandes ideais com a praticidade necessária para realizá-los no dia a dia.</p>`
  },

// ======================
  // PERSONALIDADE (1–9)
  // ======================
  Personalidade: {
    1: `<p><strong>[NOME]</strong> possui uma personalidade forte, independente e extremamente determinada. Sua natureza é individualista e orientada para conquistas, com um impulso constante de liderança.</p>
<p>Naturalmente autossuficiente e confiante, <strong>[NOME]</strong> sente necessidade de liberdade para agir de acordo com suas próprias convicções. Quando pode decidir por conta própria, expressa o melhor de seu potencial.</p>
<p><strong>Aspectos positivos:</strong> Independência, coragem, originalidade e iniciativa marcante.</p>
<p><strong>Aspectos negativos:</strong> Impulsividade e uma tendência a dominar situações, o que pode gerar resistências.</p>
<p><strong>Aprendizado:</strong> O sucesso de <strong>[NOME]</strong> depende do equilíbrio entre liderança e cooperação.</p>`,

    2: `<p><strong>[NOME]</strong> possui uma personalidade sensível e voltada para o relacionamento humano. Sua natureza é cooperativa e conciliadora, com grande habilidade para compreender emoções alheias.</p>
<p>Com um tato refinado, <strong>[NOME]</strong> consegue "ler nas entrelinhas", sendo um mediador natural. Sua personalidade floresce melhor em ambientes colaborativos do que em posições de comando direto.</p>
<p><strong>Aspectos positivos:</strong> Empatia, diplomacia, paciência e grande capacidade de mediação.</p>
<p><strong>Aspectos negativos:</strong> Indecisão e uma tendência a evitar conflitos necessários para não desagradar os outros.</p>
<p><strong>Aprendizado:</strong> Desenvolver autoconfiança permitirá que a sensibilidade de <strong>[NOME]</strong> se torne uma força de influência real.</p>`,

    3: `<p><strong>[NOME]</strong> possui uma personalidade expansiva, comunicativa e inspiradora. Sua energia é criativa e naturalmente voltada para a expressão de ideias e sentimentos de forma entusiasta.</p>
<p>Com facilidade para motivar pessoas, <strong>[NOME]</strong> age com espontaneidade. No entanto, pode dispersar energia em muitos interesses ao mesmo tempo, faltando disciplina para concluir o que começa.</p>
<p><strong>Aspectos positivos:</strong> Criatividade vibrante, comunicação fluida e otimismo contagiante.</p>
<p><strong>Aspectos negativos:</strong> Dispersão e tendência à procrastinação quando o entusiasmo inicial diminui.</p>
<p><strong>Aprendizado:</strong> O crescimento de <strong>[NOME]</strong> vem do desenvolvimento do foco e da constância em seus projetos.</p>`,

    4: `<p>A personalidade de <strong>[NOME]</strong> é fundamentada na estabilidade, organização e responsabilidade. Sua forma de agir é prática e orientada para resultados concretos e seguros.</p>
<p><strong>[NOME]</strong> encara a vida com comprometimento, sendo percebido como alguém extremamente confiável e digno de confiança. Valoriza o esforço e entende que conquistas duradouras exigem paciência.</p>
<p><strong>Aspectos positivos:</strong> Disciplina, persistência, forte ética de trabalho e organização impecável.</p>
<p><strong>Aspectos negativos:</strong> Rigidez e certa resistência a mudanças repentinas ou ideias muito abstratas.</p>
<p><strong>Aprendizado:</strong> <strong>[NOME]</strong> cresce quando aprende a confiar na flexibilidade e abre espaço para a criatividade.</p>`,

    5: `<p><strong>[NOME]</strong> possui uma personalidade marcada pelo dinamismo e pela necessidade constante de movimento. Sua forma de agir é espontânea e aberta às variadas experiências da vida.</p>
<p>Rotinas excessivas podem gerar em <strong>[NOME]</strong> uma sensação de aprisionamento. Seu carisma e energia trazem leveza aos ambientes, facilitando a adaptação a diferentes contextos sociais e desafios.</p>
<p><strong>Aspectos positivos:</strong> Versatilidade, espírito aventureiro, adaptabilidade e magnetismo pessoal.</p>
<p><strong>Aspectos negativos:</strong> Instabilidade e dificuldade em manter o foco em tarefas repetitivas ou de longo prazo.</p>
<p><strong>Aprendizado:</strong> O segredo do sucesso para <strong>[NOME]</strong> está em equilibrar sua sede de liberdade com a disciplina necessária.</p>`,

    6: `<p><strong>[NOME]</strong> possui uma personalidade marcada pelo senso de responsabilidade e dedicação ao bem-estar alheio. Sua atitude natural é proteger e contribuir para a harmonia coletiva.</p>
<p>Guiado pela empatia, <strong>[NOME]</strong> é frequentemente procurado como conselheiro. Existe uma ligação profunda com valores familiares e afetivos, buscando sempre o equilíbrio nas relações.</p>
<p><strong>Aspectos positivos:</strong> Amorosidade, senso de justiça, generosidade e grande capacidade de acolhimento.</p>
<p><strong>Aspectos negativos:</strong> Tendência ao autossacrifício exagerado e dificuldade em estabelecer limites para não se sobrecarregar.</p>
<p><strong>Aprendizado:</strong> <strong>[NOME]</strong> evolui quando aprende a cuidar de si com a mesma intensidade que dedica aos outros.</p>`,

    7: `<p><strong>[NOME]</strong> possui uma personalidade analítica, introspectiva e orientada pela busca da verdade. Sua forma de agir é guiada pela necessidade de compreender a vida em níveis profundos.</p>
<p>Sua mente investigativa prefere o estudo e a observação antes de qualquer ação. <strong>[NOME]</strong> valoriza a privacidade e momentos de solitude para organizar seus pensamentos e intuições.</p>
<p><strong>Aspectos positivos:</strong> Sabedoria, profundidade intelectual, discernimento e prudência nas escolhas.</p>
<p><strong>Aspectos negativos:</strong> Isolamento emocional e uma tendência a ser excessivamente crítico ou cético.</p>
<p><strong>Aprendizado:</strong> O crescimento de <strong>[NOME]</strong> ocorre ao equilibrar a razão com a emoção, compartilhando sua sabedoria.</p>`,

    8: `<p><strong>[NOME]</strong> possui uma personalidade forte e orientada para conquistas concretas. Sua atuação no mundo é marcada pela ambição saudável, organização e busca por resultados tangíveis.</p>
<p>Sua postura transmite autoridade e segurança, tornando a liderança uma consequência natural de sua capacidade de gestão. <strong>[NOME]</strong> tem facilidade para lidar com desafios e ambientes competitivos.</p>
<p><strong>Aspectos positivos:</strong> Visão estratégica, determinação, eficiência e senso de responsabilidade.</p>
<p><strong>Aspectos negativos:</strong> Foco excessivo em resultados materiais, podendo parecer frio ou controlador em momentos de estresse.</p>
<p><strong>Aprendizado:</strong> <strong>[NOME]</strong> alcança a plenitude ao equilibrar o sucesso material com a realização emocional.</p>`,

    9: `<p><strong>[NOME]</strong> possui uma personalidade marcada pela compaixão e por um profundo senso de justiça universal. Sua maneira de agir demonstra preocupação genuína com o bem-estar coletivo.</p>
<p>Com uma visão ampla da vida, <strong>[NOME]</strong> busca propósito em tudo o que faz. Sua presença é inspiradora e reconfortante, transmitindo uma abertura emocional que acolhe sem julgamentos.</p>
<p><strong>Aspectos positivos:</strong> Altruísmo, empatia vasta, visão humanitária e capacidade de inspirar multidões.</p>
<p><strong>Aspectos negativos:</strong> Idealismo excessivo que pode levar à frustração com a realidade prática do mundo.</p>
<p><strong>Aprendizado:</strong> <strong>[NOME]</strong> cresce ao aprender a ajudar o mundo sem anular suas próprias necessidades básicas.</p>`
  },

  // ======================
  // CAMINHO DE VIDA (1–9)
  // ======================
  CaminhodeVida: {
    1: `<p>O Caminho de Vida de <strong>[NOME]</strong> é marcado pela autossuficiência. É a trilha da coragem e da honestidade, onde <strong>[NOME]</strong> frequentemente se vê à frente de seu tempo como um inovador.</p>
<p>Sua paixão e entusiasmo são contagiosos, mas <strong>[NOME]</strong> precisa de reconhecimento constante. O fracasso deve ser visto como um degrau para o aprimoramento. No amor, <strong>[NOME]</strong> busca liderar, mas deve respeitar a liberdade do parceiro.</p>
<p><strong>Foco:</strong> Permanecer fiel à voz interior e evitar o autoritarismo.</p>`,

    2: `<p>Para <strong>[NOME]</strong>, este caminho se resume em cooperação. <strong>[NOME]</strong> atua como um diplomata natural, buscando harmonia e preferindo os bastidores aos holofotes.</p>
<p>O apoio e a parceria são essenciais para que <strong>[NOME]</strong> prospere. No entanto, é preciso cuidado para não se tornar dependente da aprovação alheia. A família é o alicerce central deste caminho.</p>
<p><strong>Foco:</strong> Desenvolver independência emocional e confiar no próprio potencial de mediação.</p>`,

    3: `<p>O caminho de <strong>[NOME]</strong> é vibrante, focado na criatividade e na expressão da alegria. <strong>[NOME]</strong> possui uma energia contagiante que motiva e inspira quem está ao redor.</p>
<p>Guiado pela intuição, <strong>[NOME]</strong> busca o sucesso social, mas deve lutar contra a dispersão. O desafio é concluir o que começa sem perder a leveza natural.</p>
<p><strong>Foco:</strong> Transformar o talento comunicativo em realizações concretas com disciplina.</p>`,

    4: `<p>Este caminho exige de <strong>[NOME]</strong> construção e disciplina. <strong>[NOME]</strong> é o pilar que sustenta projetos através do trabalho duro, da responsabilidade e do método.</p>
<p>A segurança e a rotina são aliadas de <strong>[NOME]</strong>, mas a rigidez pode ser um obstáculo. Resultados sólidos virão através da persistência contínua.</p>
<p><strong>Foco:</strong> Equilibrar o trabalho árduo com momentos de leveza e prazer pessoal.</p>`,

    5: `<p>A liberdade é o guia de <strong>[NOME]</strong> neste caminho. É uma jornada de movimento, curiosidade e expansão através de experiências diretas e mudanças constantes.</p>
<p><strong>[NOME]</strong> adapta-se rapidamente, mas precisa evitar a busca por prazer imediato que gera dispersão. A versatilidade de <strong>[NOME]</strong> é sua maior ferramenta de inovação.</p>
<p><strong>Foco:</strong> Aprender que a verdadeira liberdade caminha junto com a responsabilidade.</p>`,

    6: `<p>O caminho de <strong>[NOME]</strong> é o do amor e da solidariedade. Existe um forte senso de dever em relação à família e à comunidade, tornando <strong>[NOME]</strong> um porto seguro para os outros.</p>
<p>A harmonia emocional é fundamental. <strong>[NOME]</strong> deve ter cuidado para não assumir pesos que não lhe pertencem, evitando a sobrecarga.</p>
<p><strong>Foco:</strong> Equilibrar a doação aos outros com o autocuidado essencial.</p>`,

    7: `<p>Este é o caminho da sabedoria interior para <strong>[NOME]</strong>. É uma jornada de introspecção, estudo e busca por verdades profundas que explicam a existência.</p>
<p>A intuição de <strong>[NOME]</strong> é aguçada, mas o isolamento excessivo pode ser um risco. O conhecimento acumulado deve servir para iluminar o caminho de <strong>[NOME]</strong> e dos outros.</p>
<p><strong>Foco:</strong> Integrar a razão e a espiritualidade no cotidiano prático.</p>`,

    8: `<p>O caminho de <strong>[NOME]</strong> envolve poder, autoridade e liderança material. É uma trilha de ambição estratégica, onde a gestão de recursos e pessoas é o ponto central.</p>
<p><strong>[NOME]</strong> possui resiliência para superar obstáculos, mas deve evitar que o materialismo sufoque sua expressão emocional.</p>
<p><strong>Foco:</strong> Exercer a liderança com ética, justiça e equilíbrio humano.</p>`,

    9: `<p><strong>[NOME]</strong> percorre um caminho humanitário e compassivo. É a trilha do desapego, da sabedoria emocional e da conclusão de ciclos importantes.</p>
<p>A empatia de <strong>[NOME]</strong> permite compreender diferentes realidades. O desafio é não se deixar abater pelo idealismo excessivo quando a realidade se mostra dura.</p>
<p><strong>Foco:</strong> Praticar a compaixão universal mantendo o equilíbrio emocional próprio.</p>`
  },

  // ======================
  // PROPÓSITO (1–9)
  // ======================
  Propósito: {
    1: `<p>O propósito de <strong>[NOME]</strong> é viver com originalidade e coragem. <strong>[NOME]</strong> deve buscar autonomia para agir sem depender dos outros, liderando sua própria história.</p>
<p>Aprender a dominar o ego e expor sentimentos com clareza será o diferencial para que <strong>[NOME]</strong> alcance a felicidade real e o respeito por sua competência.</p>`,

    2: `<p>O propósito de <strong>[NOME]</strong> é ser um conciliador que confia no próprio potencial. <strong>[NOME]</strong> deve usar sua gentileza para unir pessoas, sem se anular ou se deixar manipular.</p>
<p>Atuar com sabedoria nos bastidores trará a <strong>[NOME]</strong> a harmonia necessária para sua evolução pessoal e profissional.</p>`,

    3: `<p>O propósito de <strong>[NOME]</strong> é levar alegria e criatividade ao mundo. <strong>[NOME]</strong> deve se expressar com autenticidade, evitando o exibicionismo e focando no que é realmente produtivo.</p>
<p>Ao usar sua comunicação de forma construtiva, <strong>[NOME]</strong> abrirá portas valiosas para si e para os outros.</p>`,

    4: `<p>O propósito de <strong>[NOME]</strong> é construir estabilidade. <strong>[NOME]</strong> deve ser o exemplo de confiabilidade, criando bases sólidas através da disciplina e do planejamento constante.</p>
<p>Ao equilibrar a responsabilidade com a leveza, <strong>[NOME]</strong> transformará seu esforço em um legado duradouro.</p>`,

    5: `<p>O propósito de <strong>[NOME]</strong> é a adaptabilidade. <strong>[NOME]</strong> deve estar aberto a mudanças e novas experiências, aprendendo a controlar impulsos para agir com maturidade.</p>
<p>Desenvolver disciplina permitirá que <strong>[NOME]</strong> transforme as múltiplas oportunidades que surgem em conquistas reais.</p>`,

    6: `<p>O propósito de <strong>[NOME]</strong> é ser um pacificador zeloso. <strong>[NOME]</strong> deve criar harmonia nos relacionamentos, oferecendo apoio sem absorver os problemas alheios como se fossem seus.</p>
<p>A honestidade e o equilíbrio emocional serão as chaves para que <strong>[NOME]</strong> encontre estabilidade e paz.</p>`,

    7: `<p>O propósito de <strong>[NOME]</strong> é a integração social e a busca pela sabedoria. <strong>[NOME]</strong> deve compartilhar seu conhecimento e permitir que as pessoas se aproximem de seu mundo interno.</p>
<p>Superar o isolamento e expressar sentimentos com clareza são os passos essenciais para a evolução de <strong>[NOME]</strong>.</p>`,

    8: `<p>O propósito de <strong>[NOME]</strong> é a liderança justa e estratégica. <strong>[NOME]</strong> deve assumir responsabilidades com compromisso, usando sua autoridade para construir progresso com integridade.</p>
<p>Evitar a prepotência e cultivar a paciência garantirá que o sucesso material de <strong>[NOME]</strong> seja sustentável.</p>`,

    9: `<p>O propósito de <strong>[NOME]</strong> é agir com compaixão e realismo. <strong>[NOME]</strong> deve inspirar pessoas e levar esperança, mantendo os pés no chão para que seu idealismo gere frutos práticos.</p>
<p>Ao ajudar sem esperar reconhecimento, <strong>[NOME]</strong> cumprirá sua missão humanitária com plenitude.</p>`
  },

  // ======================
  // MATURIDADE (1–9)
  // ======================
  maturidade: {
    1: `<p>Na maturidade de <strong>[NOME]</strong>, a necessidade de independência e o instinto de liderança tornam-se centrais. <strong>[NOME]</strong> sentirá um impulso renovado para assumir o comando de sua própria vida.</p>
<p>É um período para colher recompensas pela iniciativa. O desafio para <strong>[NOME]</strong> será evitar a rigidez e a impaciência com quem não acompanha seu ritmo.</p>`,

    2: `<p>A fase madura de <strong>[NOME]</strong> fortalece a diplomacia e a sensibilidade. <strong>[NOME]</strong> sentirá uma necessidade maior de harmonia nas conexões pessoais e um talento natural para mediar conflitos.</p>
<p>Para <strong>[NOME]</strong>, a influência virá mais pela persuasão gentil do que pela imposição de vontades.</p>`,

    3: `<p>Com o tempo, <strong>[NOME]</strong> sentirá um florescimento da criatividade e do desejo de socializar. A maturidade traz para <strong>[NOME]</strong> uma fase de maior extroversão e busca por prazeres intelectuais e sociais.</p>
<p>O desafio será manter o foco para não dispersar essa energia vibrante em atividades superficiais.</p>`,

    4: `<p>A maturidade de <strong>[NOME]</strong> traz realismo e organização. É um tempo de consolidar conquistas concretas e garantir a segurança daqueles que <strong>[NOME]</strong> ama.</p>
<p>Embora a rotina traga conforto, <strong>[NOME]</strong> deve se policiar para não se tornar excessivamente teimoso ou resistente ao novo.</p>`,

    5: `<p>Na maturidade, <strong>[NOME]</strong> sentirá um forte desejo de renovação. A vontade de viajar, conhecer novas culturas e experimentar a liberdade será o motor de <strong>[NOME]</strong>.</p>
<p>O carisma de <strong>[NOME]</strong> estará no auge, sendo essencial canalizar essa inquietude para projetos que tragam significado real.</p>`,

    6: `<p>A fase madura amplia o papel de <strong>[NOME]</strong> como orientador e protetor. <strong>[NOME]</strong> será o pilar emocional da família e dos amigos próximos.</p>
<p>É vital que <strong>[NOME]</strong> aprenda a cuidar de si mesmo com a mesma dedicação que oferece generosamente ao seu círculo afetivo.</p>`,

    7: `<p>A maturidade de <strong>[NOME]</strong> é marcada por um profundo mergulho no autoconhecimento. O interesse por filosofia e espiritualidade se torna a base da vida de <strong>[NOME]</strong>.</p>
<p>Sua sabedoria interior se tornará evidente para todos, desde que <strong>[NOME]</strong> evite o isolamento excessivo.</p>`,

    8: `<p>Na maturidade, <strong>[NOME]</strong> equilibrará o sucesso material com um propósito maior. O foco deixa de ser apenas a conquista pessoal e passa a ser o benefício coletivo.</p>
<p>A integridade e o senso de justiça de <strong>[NOME]</strong> serão as marcas registradas de sua influência social nesta fase.</p>`,

    9: `<p>O amadurecimento traz para <strong>[NOME]</strong> o desejo de deixar um legado positivo para a humanidade. A sensibilidade social e o altruísmo de <strong>[NOME]</strong> estarão muito presentes.</p>
<p><strong>[NOME]</strong> encontrará realização ao servir ao próximo, equilibrando essa doação com o necessário autocuidado.</p>`
  },

  // ======================
  // RELACIONAMENTO (1–9)
  // ======================
  relacionamento: {
    1: `<p>No amor, <strong>[NOME]</strong> é intenso e apaixonado. Seus sentimentos nascem de ideais fortes e magnetismo pessoal. Embora <strong>[NOME]</strong> atraia parceiros facilmente, pode enfrentar momentos de indecisão afetiva.</p>
<p>A necessidade de liberdade é vital para <strong>[NOME]</strong>. A felicidade conjugal virá quando <strong>[NOME]</strong> aprender a equilibrar seus impulsos por novidade com o compromisso e a responsabilidade afetiva.</p>`,

    2: `<p><strong>[NOME]</strong> é criterioso e sensível nas escolhas amorosas, valorizando a harmonia e a estabilidade emocional acima de tudo. O romantismo é uma marca forte de <strong>[NOME]</strong>.</p>
<p>Para prosperar, <strong>[NOME]</strong> precisa de um parceiro prático que ofereça segurança. O desafio de <strong>[NOME]</strong> é fortalecer sua autonomia emocional para não se tornar influenciável demais no relacionamento.</p>`,

    3: `<p>Com charme e sociabilidade, <strong>[NOME]</strong> costuma ter uma vida afetiva movimentada. <strong>[NOME]</strong> busca parceiros que compartilhem de sua sensibilidade e interesses intelectuais.</p>
<p>A comunicação clara é o segredo para <strong>[NOME]</strong> evitar mal-entendidos. Ao amadurecer, <strong>[NOME]</strong> encontra vínculos profundos baseados na compreensão mútua e na leveza.</p>`,

    4: `<p>Para <strong>[NOME]</strong>, a segurança emocional é a prioridade absoluta no amor. <strong>[NOME]</strong> valoriza o compromisso duradouro e vê o casamento como uma estrutura sólida a ser construída com zelo.</p>
<p><strong>[NOME]</strong> é protetor e dedicado, mas deve evitar cobranças excessivas sobre o parceiro. O amor de <strong>[NOME]</strong> é provado através da lealdade e da constância no dia a dia.</p>`,

    5: `<p>O relacionamento para <strong>[NOME]</strong> precisa ser uma aventura constante. <strong>[NOME]</strong> tem pavor da rotina e busca parceiros flexíveis que respeitem seu espaço e sua sede de experiências.</p>
<p>A maturidade traz para <strong>[NOME]</strong> uma estabilidade maior, muitas vezes transformando antigas paixões em amizades duradouras. A felicidade de <strong>[NOME]</strong> surge ao unir emoção com disciplina.</p>`,

    6: `<p><strong>[NOME]</strong> vive o amor com dedicação e lealdade total. Mesmo com certa timidez inicial, <strong>[NOME]</strong> busca a pessoa ideal com persistência e investe tudo na harmonia do lar.</p>
<p>A necessidade de se sentir amado é o motor de <strong>[NOME]</strong>. Ao equilibrar a possessividade com a confiança, <strong>[NOME]</strong> constrói relações de cumplicidade profunda.</p>`,

    7: `<p>No campo afetivo, <strong>[NOME]</strong> é seletivo e valoriza a conexão mental profunda. <strong>[NOME]</strong> precisa conhecer bem o parceiro antes de se entregar ao compromisso.</p>
<p>A individualidade de <strong>[NOME]</strong> deve ser respeitada. A maturidade traz a <strong>[NOME]</strong> a clareza necessária para escolher relações que respeitem seu silêncio e sua busca por sentido.</p>`,

    8: `<p><strong>[NOME]</strong> encara o amor com seriedade e busca uniões definitivas. Valoriza a sinceridade e a fidelidade, sendo um parceiro extremamente leal e focado na estabilidade da relação.</p>
<p><strong>[NOME]</strong> pode ter um perfil dominador, por isso deve exercitar a parceria real. A segurança financeira e emocional caminham juntas para a felicidade de <strong>[NOME]</strong>.</p>`,

    9: `<p>Para <strong>[NOME]</strong>, o amor verdadeiro é um grande objetivo de vida. <strong>[NOME]</strong> é capaz de grandes sacrifícios por quem ama, mas deve ter cuidado para não idealizar demais o parceiro.</p>
<p>O equilíbrio entre as expectativas e a realidade permitirá que <strong>[NOME]</strong> viva relações intensas, humanitárias e cheias de propósito emocional.</p>`
  }
};

​Ciclos:{
1:{
1:`<p><strong>CICLO 1 — Formação da Individualidade e Autonomia</strong></p>
​<p>Este período representa para [NOME] a fase inicial de formação da individualidade e da autonomia.</p>
<p>[NOME] aprende a afirmar sua identidade, desenvolver iniciativa e construir autoconfiança desde cedo.</p>
<p>A infância e a juventude de [NOME] exigem equilíbrio entre liberdade e orientação, permitindo a construção de responsabilidade e maturidade emocional.</p>
<p>A presença de figuras de autoridade confiáveis torna-se essencial para servir de modelo e referência para [NOME].</p>
<p>Surge a necessidade de [NOME] descobrir desejos, talentos e vocação, iniciando a construção da identidade profissional.</p>
<p>A disciplina deve existir sem excesso de rigidez para [NOME], favorecendo a autonomia consciente.</p>
<p>Experiências dessa fase moldam fortemente o caráter e a estabilidade futura de [NOME].</p>
<p>Quando bem orientada, [NOME] inicia a vida adulta com iniciativa, liderança e segurança.</p>
<p>Caso contrário, podem surgir para [NOME] dúvidas, instabilidade emocional e dificuldade de definição profissional.</p>
<p>Este ciclo incentiva em [NOME] coragem, independência e autodescoberta.</p>
<p>É uma fase de aprendizado prático e construção do caráter para [NOME].</p>
<p>As bases do futuro de [NOME] são estabelecidas aqui.</p>
<p>A consciência dos próprios limites deve ser desenvolvida por [NOME].</p>
<p>A busca por autonomia de [NOME] é constante.</p>
<p>O desenvolvimento pessoal de [NOME] torna-se prioridade.</p>`,
​2:`<p><strong>CICLO 2 — Sensibilidade e Cooperação</strong></p>
​<p>Este ciclo enfatiza em [NOME] a sensibilidade, cooperação e desenvolvimento emocional.</p>
<p>A infância de [NOME] tende a ser marcada por forte influência familiar e necessidade de proteção, exigindo equilíbrio entre autonomia e apoio.</p>
<p>Surge para [NOME] a necessidade de construir autoconfiança e capacidade de decisão.</p>
<p>[NOME] aprende paciência, empatia e flexibilidade nas relações.</p>
<p>[NOME] pode demonstrar timidez ou insegurança ao expressar opiniões, refletindo a busca por identidade emocional.</p>
<p>A fase favorece em [NOME] a introspecção e autoconhecimento, permitindo descobertas importantes para a vida adulta.</p>
<p>Relações afetivas exercem grande impacto no desenvolvimento psicológico de [NOME].</p>
<p>O estímulo à independência é fundamental para evitar dependência excessiva em [NOME].</p>
<p>Desenvolve-se em [NOME] o senso de cooperação e sensibilidade social.</p>
<p>A maturidade emocional de [NOME] começa a ser construída gradualmente.</p>
<p>A busca por harmonia torna-se central para [NOME].</p>
<p>O ambiente familiar influencia profundamente as decisões futuras de [NOME].</p>
<p>[NOME] aprende a confiar em sua percepção.</p>
<p>O crescimento de [NOME] acontece de forma gradual e sensível.</p>
<p>Este período fortalece em [NOME] os vínculos e a inteligência emocional.</p>`,
​3:`<p><strong>CICLO 3 — Alegria e Criatividade</strong></p>
​<p>Este ciclo simboliza para [NOME] a alegria, criatividade e sociabilidade.</p>
<p>A infância e juventude de [NOME] são marcadas por leveza, entusiasmo e necessidade de expressão.</p>
<p>[NOME] demonstra carisma, imaginação e forte necessidade de interação social.</p>
<p>A busca por diversão pode reduzir o foco de [NOME] em responsabilidades e estudos.</p>
<p>Surge para [NOME] a necessidade de aprender disciplina e compromisso.</p>
<p>A criatividade e a comunicação de [NOME] se destacam intensamente.</p>
<p>Este período favorece para [NOME] descobertas, amizades e expansão social.</p>
<p>[NOME] aprende a expressar emoções e ideias com liberdade.</p>
<p>A responsabilidade de [NOME] deve ser desenvolvida gradualmente.</p>
<p>É uma fase de experimentação e aprendizado social para [NOME].</p>
<p>A motivação de [NOME] vem da alegria e da convivência.</p>
<p>A construção de compromissos torna-se necessária para [NOME].</p>
<p>O desenvolvimento artístico de [NOME] pode ser estimulado.</p>
<p>A fase favorece em [NOME] o autoconhecimento emocional.</p>
<p>A base da comunicação futura de [NOME] é construída aqui.</p>`,
​4:`<p><strong>CICLO 4 — Disciplina e Organização</strong></p>
​<p>Este ciclo exige de [NOME] disciplina, responsabilidade e organização.</p>
<p>A infância de [NOME] pode trazer limitações e necessidade de regras claras.</p>
<p>Surge para [NOME] o aprendizado sobre esforço, rotina e persistência.</p>
<p>[NOME] aprende a respeitar limites e desenvolver autodisciplina.</p>
<p>O excesso de rigidez pode gerar em [NOME] resistência ou insegurança.</p>
<p>O equilíbrio entre disciplina e liberdade é essencial para [NOME].</p>
<p>A fase favorece para [NOME] a construção de bases materiais e educacionais.</p>
<p>O esforço de [NOME] dedicado aos estudos torna-se fundamental.</p>
<p>A responsabilidade de [NOME] cresce gradualmente.</p>
<p>[NOME] aprende a valorizar estabilidade e segurança.</p>
<p>Surge para [NOME] a necessidade de planejamento e foco.</p>
<p>A maturidade de [NOME] é construída por meio do trabalho e da dedicação.</p>
<p>A autonomia de [NOME] é conquistada progressivamente.</p>
<p>A base da vida profissional de [NOME] começa a se formar.</p>
<p>Este ciclo constrói para [NOME] estrutura e estabilidade para o futuro.</p>`,
​5:`<p><strong>CICLO 5 — Movimento e Mudança</strong></p>
​<p>Este ciclo é marcado para [NOME] por movimento, liberdade e mudanças constantes.</p>
<p>[NOME] aprende a lidar com novas experiências e desafios.</p>
<p>Surge em [NOME] uma forte necessidade de autonomia e experimentação.</p>
<p>A supervisão familiar torna-se essencial para [NOME] evitar excessos.</p>
<p>A energia física e mental de [NOME] é intensa.</p>
<p>O período favorece para [NOME] o aprendizado por experiências práticas.</p>
<p>Mudanças e transformações são frequentes na vida de [NOME].</p>
<p>[NOME] busca novas ideias e pessoas inspiradoras.</p>
<p>O desafio de [NOME] é desenvolver responsabilidade e constância.</p>
<p>[NOME] pode ter dificuldade em manter foco e estabilidade.</p>
<p>A orientação adequada garante para [NOME] a segurança futura.</p>
<p>A curiosidade e o dinamismo de [NOME] são características marcantes.</p>
<p>A fase estimula em [NOME] a independência e adaptação.</p>
<p>A busca por liberdade deve ser equilibrada por [NOME] com compromisso.</p>
<p>O aprendizado de [NOME] vem da experiência direta com a vida.</p>`,
​6:`<p><strong>CICLO 6 — Responsabilidade e Família</strong></p>
​<p>Este ciclo destaca para [NOME] a responsabilidade, família e cooperação.</p>
<p>[NOME] aprende a assumir deveres gradualmente.</p>
<p>Surge para [NOME] a necessidade de sentir pertencimento e harmonia familiar.</p>
<p>[NOME] pode ter dificuldade inicial de adaptação social.</p>
<p>A fase favorece em [NOME] o desenvolvimento de empatia e compromisso.</p>
<p>A convivência com pessoas inspiradoras torna-se essencial para [NOME].</p>
<p>O apoio emocional influencia profundamente o crescimento de [NOME].</p>
<p>A vocação de [NOME] começa a se revelar.</p>
<p>O senso de responsabilidade de [NOME] se fortalece progressivamente.</p>
<p>[NOME] aprende a equilibrar necessidades pessoais e coletivas.</p>
<p>Surge em [NOME] o desejo de contribuir com o grupo.</p>
<p>A maturidade emocional de [NOME] cresce lentamente.</p>
<p>O ambiente familiar exerce forte influência sobre [NOME].</p>
<p>A fase favorece para [NOME] a estabilidade emocional futura.</p>
<p>A base da vida afetiva de [NOME] é construída aqui.</p>`,
​7:`<p><strong>CICLO 7 — Introspecção e Autoconhecimento</strong></p>
​<p>Este ciclo representa para [NOME] introspecção, sensibilidade e autoconhecimento.</p>
<p>[NOME] pode demonstrar timidez e necessidade de isolamento.</p>
<p>Surge para [NOME] a busca por compreensão interior e reflexão profunda.</p>
<p>O incentivo à socialização é essencial para o equilíbrio emocional de [NOME].</p>
<p>[NOME] pode ter dificuldade em expressar sentimentos.</p>
<p>A autoestima de [NOME] precisa ser fortalecida.</p>
<p>O apoio familiar torna-se fundamental para [NOME].</p>
<p>A fase favorece em [NOME] o desenvolvimento intelectual e espiritual.</p>
<p>[NOME] aprende a confiar em si mesma.</p>
<p>O isolamento excessivo deve ser evitado por [NOME].</p>
<p>A introspecção pode gerar em [NOME] sabedoria e maturidade.</p>
<p>O estímulo ao diálogo é essencial para [NOME].</p>
<p>A conexão com o mundo exterior precisa ser cultivada por [NOME].</p>
<p>A fase desenvolve em [NOME] uma consciência emocional profunda.</p>
<p>O crescimento de [NOME] ocorre de forma interiorizada.</p>`,
​8:`<p><strong>CICLO 8 — Poder e Realização Material</strong></p>
​<p>Este ciclo simboliza para [NOME] a ambição, poder pessoal e desenvolvimento material.</p>
<p>[NOME] demonstra liderança e senso de justiça desde cedo.</p>
<p>Surge em [NOME] interesse por conquistas e responsabilidades.</p>
<p>A fase favorece em [NOME] a construção de valores e capacidade de julgamento.</p>
<p>A disciplina torna-se essencial para o sucesso futuro de [NOME].</p>
<p>[NOME] busca reconhecimento e espaço social.</p>
<p>A orientação adequada define os resultados futuros de [NOME].</p>
<p>A ambição de [NOME] precisa ser equilibrada com ética.</p>
<p>A capacidade de decisão de [NOME] cresce intensamente.</p>
<p>[NOME] aprende a lidar com poder e responsabilidade.</p>
<p>O foco material de [NOME] pode se intensificar.</p>
<p>O equilíbrio emocional garante a [NOME] estabilidade futura.</p>
<p>A fase desenvolve em [NOME] o senso de autoridade e liderança.</p>
<p>A base das conquistas de [NOME] é construída aqui.</p>
<p>O crescimento de [NOME] ocorre por meio da responsabilidade.</p>`,
​9:`<p><strong>CICLO 9 — Compaixão e Transformação</strong></p>
​<p>Este ciclo é marcado em [NOME] por sensibilidade, compaixão e transformações profundas.</p>
<p>[NOME] desenvolve empatia e visão humanitária.</p>
<p>[NOME] pode sentir-se incompreendida ou deslocada.</p>
<p>A criatividade e a sensibilidade emocional de [NOME] são intensas.</p>
<p>Surge para [NOME] a necessidade de propósito e significado.</p>
<p>A fase exige de [NOME] orientação emocional cuidadosa.</p>
<p>[NOME] pode ter sensação de solidão ou confusão.</p>
<p>O desenvolvimento espiritual e emocional de [NOME] é intenso.</p>
<p>[NOME] aprende tolerância e aceitação.</p>
<p>A busca por vocação pode ser desafiadora para [NOME].</p>
<p>Grandes mudanças e adaptações marcam o período de [NOME].</p>
<p>A maturidade emocional de [NOME] cresce lentamente.</p>
<p>A fase prepara [NOME] para profundas transformações futuras.</p>
<p>O crescimento de [NOME] ocorre por meio da compreensão da vida.</p>
<p>Este ciclo encerra a fase formativa de [NOME] com forte aprendizado emocional.</p>`
},
​2:{
1:`<p><strong>CICLO 1 — Independência e Realização</strong></p>
​<p>Este ciclo marca para [NOME] o início das grandes realizações e da busca por independência.</p>
<p>[NOME] passa a confirmar se as escolhas feitas anteriormente estão corretas.</p>
<p>[NOME] começa a estruturar sua carreira e estabilidade financeira.</p>
<p>Surge para [NOME] a necessidade de assumir responsabilidades e construir o próprio caminho.</p>
<p>É uma fase de grande energia, ambição e iniciativa para [NOME].</p>
<p>As conquistas de [NOME] dependem principalmente do esforço pessoal e da determinação.</p>
<p>O reconhecimento profissional de [NOME] tende a crescer gradualmente.</p>
<p>Este período exige de [NOME] coragem para enfrentar desafios e superar obstáculos.</p>
<p>A autoconfiança de [NOME] se fortalece através das realizações.</p>
<p>O objetivo de [NOME] é chegar ao próximo ciclo com estabilidade.</p>
<p>A independência de [NOME] torna-se prioridade.</p>
<p>O trabalho intenso de [NOME] traz recompensas.</p>
<p>O desenvolvimento pessoal de [NOME] ganha destaque.</p>
<p>A construção do futuro de [NOME] se torna concreta.</p>
<p>A iniciativa de [NOME] determina os resultados.</p>`,
​2:`<p><strong>CICLO 2 — Diplomacia e Parceria</strong></p>
​<p>Este ciclo enfatiza para [NOME] a cooperação, diplomacia e trabalho em equipe.</p>
<p>Surge para [NOME] a necessidade de alinhar objetivos pessoais com interesses coletivos.</p>
<p>A paciência e a sensibilidade tornam-se fundamentais para [NOME] alcançar metas.</p>
<p>[NOME] aprende a negociar, conciliar e construir parcerias.</p>
<p>O crescimento de [NOME] ocorre por meio da colaboração e do apoio mútuo.</p>
<p>É importante [NOME] evitar dependência excessiva ou submissão.</p>
<p>O equilíbrio emocional de [NOME] favorece conquistas duradouras.</p>
<p>O sucesso de [NOME] surge através de estratégias e planejamento.</p>
<p>A fase pede a [NOME] discrição e observação.</p>
<p>O progresso de [NOME] acontece de forma gradual e constante.</p>
<p>A diplomacia abre para [NOME] novas oportunidades.</p>
<p>A convivência social de [NOME] ganha importância.</p>
<p>A realidade deve ser encarada por [NOME] com maturidade.</p>
<p>O trabalho em equipe impulsiona os resultados de [NOME].</p>`,
​3:`<p><strong>CICLO 3 — Expressão e Expansão</strong></p>
​<p>Este ciclo traz para [NOME] leveza, expansão e expressão pessoal.</p>
<p>[NOME] sente maior alegria, criatividade e sociabilidade.</p>
<p>Surge em [NOME] o desejo de se comunicar, aprender e desenvolver talentos.</p>
<p>A vida social de [NOME] tende a se expandir e novas oportunidades surgem.</p>
<p>É um período favorável para o crescimento intelectual e artístico de [NOME].</p>
<p>A autoconfiança de [NOME] aumenta com a expressão das ideias.</p>
<p>O desafio de [NOME] é evitar dispersão e superficialidade.</p>
<p>A criatividade de [NOME] deve ser direcionada a objetivos concretos.</p>
<p>O entusiasmo de [NOME] favorece novas conquistas.</p>
<p>O prazer de [NOME] em viver se intensifica.</p>
<p>A comunicação de [NOME] torna-se ferramenta essencial.</p>
<p>Novas experiências ampliam os horizontes de [NOME].</p>
<p>O aprendizado de [NOME] ocorre com facilidade.</p>
<p>A felicidade de [NOME] motiva o crescimento.</p>`,
​4:`<p><strong>CICLO 4 — Estabilidade e Trabalho</strong></p>
​<p>Este ciclo exige de [NOME] dedicação, planejamento e construção de bases sólidas.</p>
<p>A prioridade de [NOME] passa a ser estabilidade profissional e segurança material.</p>
<p>O trabalho disciplinado de [NOME] torna-se essencial para alcançar objetivos.</p>
<p>[NOME] aprende a valorizar organização e persistência.</p>
<p>O progresso de [NOME] ocorre através do esforço constante.</p>
<p>A rotina torna-se necessária para o crescimento estruturado de [NOME].</p>
<p>Este é um período de consolidação e amadurecimento para [NOME].</p>
<p>A responsabilidade de [NOME] aumenta significativamente.</p>
<p>A construção de um legado torna-se prioridade para [NOME].</p>
<p>A disciplina de [NOME] garante resultados duradouros.</p>
<p>A motivação de [NOME] deve vir do propósito pessoal.</p>
<p>O foco de [NOME] substitui a impulsividade.</p>
<p>A estabilidade de [NOME] começa a se formar.</p>
<p>O crescimento de [NOME] é gradual e seguro.</p>`,
​5:`<p><strong>CICLO 5 — Mudança e Liberdade Consciente</strong></p>
​<p>Este é para [NOME] um ciclo de mudanças intensas e oportunidades inesperadas.</p>
<p>A vida de [NOME] torna-se dinâmica, exigindo adaptação constante.</p>
<p>[NOME] aprende a lidar com liberdade e responsabilidade.</p>
<p>Novas experiências ampliam a visão de mundo de [NOME].</p>
<p>A flexibilidade torna-se essencial para o sucesso de [NOME].</p>
<p>Mudanças repentinas podem ocorrer com frequência para [NOME].</p>
<p>A fase favorece a expansão pessoal e profissional de [NOME].</p>
<p>A curiosidade de [NOME] impulsiona novas descobertas.</p>
<p>O desafio de [NOME] é evitar impulsividade e instabilidade.</p>
<p>A liberdade de [NOME] deve ser usada com sabedoria.</p>
<p>O crescimento de [NOME] ocorre por meio da experiência.</p>
<p>Novas oportunidades surgem rapidamente para [NOME].</p>
<p>A capacidade de adaptação de [NOME] define resultados.</p>
<p>Este ciclo ensina a [NOME] o valor da liberdade consciente.</p>`,
​6:`<p><strong>CICLO 6 — Equilíbrio e União</strong></p>
​<p>Este ciclo destaca para [NOME] a responsabilidade afetiva, parcerias e compromissos.</p>
<p>Surge para [NOME] a necessidade de cooperação e equilíbrio nas relações.</p>
<p>[NOME] aprende a compartilhar responsabilidades.</p>
<p>O desenvolvimento de [NOME] acontece através da união com outras pessoas.</p>
<p>Parcerias podem trazer para [NOME] crescimento significativo.</p>
<p>O individualismo de [NOME] deve dar lugar à colaboração.</p>
<p>A harmonia torna-se essencial para o progresso de [NOME].</p>
<p>O compromisso fortalece as conquistas de [NOME].</p>
<p>A vida afetiva de [NOME] ganha importância.</p>
<p>O equilíbrio emocional de [NOME] favorece estabilidade.</p>
<p>O sucesso de [NOME] vem do esforço conjunto.</p>
<p>A flexibilidade de [NOME] melhora relacionamentos.</p>
<p>A maturidade emocional de [NOME] se intensifica.</p>`,
​7:`<p><strong>CICLO 7 — Estudo e Autoconfiança</strong></p>
​<p>Este ciclo favorece para [NOME] a introspecção, estudo e autoconhecimento.</p>
<p>[NOME] sente necessidade de compreender sua essência.</p>
<p>Surge em [NOME] o desejo de aperfeiçoamento pessoal e intelectual.</p>
<p>O crescimento de [NOME] ocorre por meio da reflexão.</p>
<p>A busca de [NOME] por conhecimento se intensifica.</p>
<p>A disciplina mental de [NOME] torna-se essencial.</p>
<p>O sucesso de [NOME] depende de concentração e foco.</p>
<p>A intuição de [NOME] se fortalece gradualmente.</p>
<p>O isolamento pode ser necessário para o crescimento interior de [NOME].</p>
<p>O aprendizado profundo traz sabedoria para [NOME].</p>
<p>As oportunidades para [NOME] surgem naturalmente.</p>
<p>[NOME] aprende a confiar em si mesma.</p>
<p>O desenvolvimento de [NOME] ocorre de dentro para fora.</p>`,
​8:`<p><strong>CICLO 8 — Liderança e Prosperidade</strong></p>
​<p>Este ciclo está ligado para [NOME] às conquistas materiais e ao poder de realização.</p>
<p>A dedicação de [NOME] ao trabalho e aos objetivos financeiros aumenta.</p>
<p>O senso de justiça e responsabilidade de [NOME] torna-se essencial.</p>
<p>As recompensas de [NOME] são proporcionais ao esforço.</p>
<p>O equilíbrio emocional de [NOME] garante sucesso.</p>
<p>O autocontrole de [NOME] evita perdas e impulsividade.</p>
<p>Grandes oportunidades podem surgir para [NOME].</p>
<p>A liderança de [NOME] se fortalece naturalmente.</p>
<p>A confiança de [NOME] impulsiona conquistas.</p>
<p>O planejamento financeiro de [NOME] torna-se importante.</p>
<p>O sucesso de [NOME] exige ética e disciplina.</p>`,
​9:`<p><strong>CICLO 9 — Evolução e Desapego</strong></p>
​<p>Este ciclo representa para [NOME] transformação, desapego e amadurecimento emocional.</p>
<p>[NOME] desenvolve empatia e visão humanitária.</p>
<p>Surge para [NOME] a necessidade de reavaliar valores e objetivos.</p>
<p>O desapego de mágoas e frustrações torna-se necessário para [NOME].</p>
<p>A maturidade emocional de [NOME] se fortalece.</p>
<p>Mudanças profundas podem ocorrer na vida de [NOME].</p>
<p>A vida pede a [NOME] renovação e crescimento interior.</p>
<p>O passado deve ser compreendido e superado por [NOME].</p>
<p>A compaixão ganha destaque para [NOME].</p>
<p>O desenvolvimento espiritual de [NOME] se intensifica.</p>
<p>Este período prepara [NOME] para novas fases da vida.</p>`
},
​3:{
1:`<p><strong>CICLO 1 — Renovação e Maturidade</strong></p>
​<p>No terceiro ciclo de vida, para [NOME], o número 1 representa uma fase de renovação.</p>
<p>Surge para [NOME] uma nova percepção sobre a vida e sobre as decisões tomadas.</p>
<p>[NOME] passa a compreender melhor suas motivações e qualidades.</p>
<p>É um período de iniciativa, coragem e autoconfiança para [NOME].</p>
<p>O desejo de [NOME] continuar realizando e conquistando permanece forte.</p>
<p>Quando a trajetória de [NOME] foi produtiva, há sensação de realização.</p>
<p>Caso contrário, podem surgir em [NOME] frustrações ou arrependimentos.</p>
<p>Este ciclo incentiva em [NOME] novos objetivos e independência emocional.</p>
<p>É momento de [NOME] assumir a própria história com maturidade.</p>`,
​2:`<p><strong>CICLO 2 — Harmonia e Relações Humanas</strong></p>
​<p>Neste ciclo, o número 2 traz para [NOME] uma fase de harmonia emocional.</p>
<p>[NOME] tende a sentir maior conexão com os outros e consigo mesma.</p>
<p>Surge para [NOME] a oportunidade de expressar sentimentos com naturalidade.</p>
<p>[NOME] pode superar inseguranças e desenvolver relações profundas.</p>
<p>Quando a vida de [NOME] foi equilibrada, há sensação de paz interior.</p>
<p>Caso contrário, podem surgir em [NOME] sentimentos de mágoa ou comparação.</p>
<p>Este período favorece em [NOME] a empatia, diplomacia e cooperação.</p>
<p>A maturidade emocional de [NOME] torna-se uma ferramenta poderosa.</p>`,
​3:`<p><strong>CICLO 3 — Autenticidade e Alegria</strong></p>
​<p>O número 3 representa para [NOME] uma fase de expressão e criatividade.</p>
<p>Surge para [NOME] a necessidade de compartilhar sentimentos e experiências.</p>
<p>A criatividade de [NOME] se expande e traz novos interesses.</p>
<p>Quando a trajetória de [NOME] foi bem construída, há entusiasmo e leveza.</p>
<p>Caso contrário, podem surgir em [NOME] sentimentos de rejeição ou falta de direção.</p>
<p>O desafio de [NOME] é manter o foco e evitar desperdício de energia.</p>
<p>Este ciclo incentiva em [NOME] a autenticidade e convivência social.</p>
<p>É uma fase de valorização da vida para [NOME].</p>`,
​4:`<p><strong>CICLO 4 — Realização e Legado</strong></p>
​<p>O número 4 traz para [NOME] um período de continuidade e responsabilidade.</p>
<p>[NOME] sente necessidade de manter-se ativa, produtiva e útil.</p>
<p>Surge em [NOME] maior preocupação com justiça e valores morais.</p>
<p>Quando a jornada de [NOME] foi bem conduzida, há sensação de dever cumprido.</p>
<p>Caso contrário, podem surgir em [NOME] frustração ou falta de conquistas.</p>
<p>Este ciclo reforça em [NOME] a disciplina e construção de legado.</p>
<p>É uma fase de maturidade prática para [NOME].</p>`,
​5:`<p><strong>CICLO 5 — Transformação e Expansão</strong></p>
​<p>O número 5 indica para [NOME] um período de movimento e mudanças.</p>
<p>Mesmo na maturidade, surgem para [NOME] novas oportunidades e desafios.</p>
<p>[NOME] busca segurança, mas deseja continuar explorando possibilidades.</p>
<p>Quando a vida de [NOME] foi bem conduzida, há abertura para mudanças.</p>
<p>Caso contrário, podem surgir em [NOME] insegurança ou apego ao passado.</p>
<p>Este ciclo incentiva em [NOME] a liberdade consciente e adaptação.</p>`,
​6:`<p><strong>CICLO 6 — Estabilidade Afetiva</strong></p>
​<p>O número 6 representa para [NOME] uma fase de harmonia e vínculos afetivos.</p>
<p>As relações ganham grande importância para [NOME], trazendo pertencimento.</p>
<p>Quando a trajetória de [NOME] foi equilibrada, há sentimento de ser respeitada.</p>
<p>Caso contrário, podem surgir em [NOME] sentimentos de inutilidade ou solidão.</p>
<p>Este ciclo estimula em [NOME] o amor, cooperação e equilíbrio emocional.</p>
<p>É um período de satisfação pessoal para [NOME].</p>`,
​7:`<p><strong>CICLO 7 — Sabedoria Interior</strong></p>
​<p>O número 7 simboliza para [NOME] a fase de introspecção e sabedoria.</p>
<p>É um período de reflexão e crescimento interior para [NOME].</p>
<p>Quando a vida de [NOME] foi bem conduzida, há serenidade e compreensão.</p>
<p>Caso contrário, podem surgir em [NOME] isolamento ou sensação de vazio.</p>
<p>Este ciclo favorece em [NOME] a espiritualidade e reconexão com a essência.</p>
<p>É uma fase de evolução interior para [NOME].</p>`,
​8:`<p><strong>CICLO 8 — Recompensa e Colheita</strong></p>
​<p>O número 8 representa para [NOME] a fase das recompensas e compensações.</p>
<p>Conquistas materiais e profissionais de [NOME] tornam-se evidentes.</p>
<p>Quando a trajetória de [NOME] foi correta, há prosperidade e poder pessoal.</p>
<p>Caso contrário, podem surgir em [NOME] perdas ou arrependimentos.</p>
<p>Este ciclo reforça em [NOME] a justiça e responsabilidade.</p>
<p>É a fase da colheita dos resultados da vida de [NOME].</p>`,
​9:`<p><strong>CICLO 9 — Plenitude e Significado</strong></p>
​<p>O número 9 marca para [NOME] a fase de reflexão profunda e desapego.</p>
<p>Surge em [NOME] o desejo de contribuir com o mundo e buscar significado.</p>
<p>Quando a vida de [NOME] foi bem conduzida, há sensação de paz interior.</p>
<p>Caso contrário, podem surgir em [NOME] arrependimentos e tempo perdido.</p>
<p>Este ciclo incentiva em [NOME] a compaixão e sabedoria.</p>
<p>É o encerramento da jornada de [NOME] com plena consciência.</p>`
}
};
​MOMENTOS DECISIVOS
​momentos:{
1:{
1:`<p><strong>1º MOMENTO DECISIVO — Desenvolvimento da Vontade</strong></p>
​<p>Este período reflete o início da vida de [NOME], época em que se encontra mais influenciável.</p>
<p>O desafio de [NOME] neste período é desenvolver força de vontade.</p>
<p>[NOME] deve ser incentivada desde cedo a fazer escolhas e tomar decisões.</p>
<p>Isso permitirá que futuramente [NOME] saiba avaliar o momento certo de agir.</p>
<p>[NOME] deve aprender o valor da independência e da iniciativa.</p>
<p>A juventude de [NOME] deve ser dedicada ao desenvolvimento das próprias ideias.</p>
<p>É fundamental [NOME] evitar egoísmo, teimosia e egocentrismo.</p>
<p>As amizades formadas por [NOME] influenciarão profundamente o futuro.</p>
<p>Este período exige de [NOME] coragem, determinação e confiança.</p>
<p>O sucesso de [NOME] dependerá principalmente da própria iniciativa.</p>`,
​2:`<p><strong>1º MOMENTO DECISIVO — Formação do Temperamento</strong></p>
​<p>Este período reflete o início da vida de [NOME], época em que se encontra mais influenciável.</p>
<p>O desafio de [NOME] neste período é desenvolver paciência.</p>
<p>[NOME] não deve ser protegida em excesso para não gerar dificuldades futuras.</p>
<p>Este período exige de [NOME] cooperação, sensibilidade e orientação adequada.</p>
<p>A personalidade de [NOME] está sendo formada, definindo sua reação à vida.</p>
<p>Aprender a cooperar será essencial para o desenvolvimento de [NOME].</p>
<p>Cultivar amizades sinceras trará equilíbrio emocional para [NOME].</p>`,
​3:`<p><strong>1º MOMENTO DECISIVO — Refinamento da Expressão</strong></p>
​<p>Este período reflete o início da vida de [NOME], época em que se encontra mais influenciável.</p>
<p>O desafio de [NOME] neste período é refinar a autoexpressão.</p>
<p>Trata-se de uma fase criativa e social para [NOME], exigindo disciplina.</p>
<p>É importante [NOME] aprender a controlar emoções e fazer escolhas responsáveis.</p>
<p>A seriedade será essencial para [NOME] construir conquistas duradouras.</p>`,
​4:`<p><strong>1º MOMENTO DECISIVO — Organização do Futuro</strong></p>
​<p>Este período reflete o início da vida de [NOME], época em que se encontra mais influenciável.</p>
<p>O desafio de [NOME] neste período é organizar o futuro.</p>
<p>É o momento de [NOME] aprender responsabilidade, disciplina e valor do esforço.</p>
<p>A educação recebida define a estrutura das conquistas futuras de [NOME].</p>
<p>Com dedicação, [NOME] construirá bases sólidas para a vida adulta.</p>`,
​5:`<p><strong>1º MOMENTO DECISIVO — Liberdade Responsável</strong></p>
​<p>Este período reflete o início da vida de [NOME], época em que se encontra mais influenciável.</p>
<p>O desafio de [NOME] é aprender a aproveitar oportunidades com responsabilidade.</p>
<p>É um período de experiências, mudanças e aprendizado para [NOME].</p>
<p>[NOME] deve aprender a respeitar regras, limites e autoridade.</p>
<p>A liberdade deve ser equilibrada por [NOME] para garantir estabilidade.</p>`,
​6:`<p><strong>1º MOMENTO DECISIVO — Responsabilidade Emocional</strong></p>
​<p>Este período reflete o início da vida de [NOME], época em que se encontra mais influenciável.</p>
<p>O desafio de [NOME] é desenvolver responsabilidade emocional.</p>
<p>Este período ensina a [NOME] convivência, cooperação e equilíbrio.</p>
<p>[NOME] deve aprender a cuidar dos outros sem abandonar as próprias necessidades.</p>
<p>Diplomacia e empatia devem ser desenvolvidas por [NOME] desde cedo.</p>`,
​7:`<p><strong>1º MOMENTO DECISIVO — Construção de Valores</strong></p>
​<p>Este período reflete o início da vida de [NOME], época em que se encontra mais influenciável.</p>
<p>O desafio de [NOME] é desenvolver autoconfiança e autoestima.</p>
<p>[NOME] deve ser incentivada a se relacionar e evitar o isolamento.</p>
<p>É fundamental [NOME] aprender a enfrentar desafios com segurança.</p>
<p>Este período constrói para [NOME] a base da maturidade futura.</p>`,
​8:`<p><strong>1º MOMENTO DECISIVO — Estudo e Disciplina</strong></p>
​<p>Este período reflete o início da vida de [NOME], época em que se encontra mais influenciável.</p>
<p>O desafio de [NOME] é desenvolver senso de justiça e equilíbrio.</p>
<p>Este período exige de [NOME] estudo, disciplina e organização.</p>
<p>É importante [NOME] aprender a lidar com responsabilidades e autocontrole.</p>
<p>Uma boa formação permitirá a [NOME] alcançar objetivos precocemente.</p>`,
​9:`<p><strong>1º MOMENTO DECISIVO — Descoberta e Empatia</strong></p>
​<p>Este período reflete o início da vida de [NOME], época em que se encontra mais influenciável.</p>
<p>O desafio de [NOME] é desenvolver empatia e visão humanitária.</p>
<p>Este pode ser um período sensível para [NOME], exigindo compreensão.</p>
<p>A convivência com diferentes pessoas desenvolve em [NOME] maturidade.</p>
<p>É uma fase de descobertas que prepara [NOME] para o futuro.</p>`
},
​2:{
1:`<p><strong>2º MOMENTO DECISIVO — Consolidação da Identidade</strong></p>
​<p>Este período marca para [NOME] uma fase de escolhas importantes e maior autonomia.</p>
<p>O desenvolvimento de [NOME] passa a exigir atitude, coragem e posicionamento.</p>
<p>O desafio deste período é [NOME] manter entusiasmo e autoconfiança.</p>
<p>É um momento que exige de [NOME] coragem para agir e assumir o controle.</p>
<p>[NOME] deve confiar em suas ideias e acreditar em sua capacidade.</p>
<p>As decisões tomadas agora terão impacto direto no futuro de [NOME].</p>
<p>A independência de [NOME] deve ser desenvolvida com responsabilidade.</p>
<p>É importante [NOME] aprender a lidar com obstáculos sem perder motivação.</p>
<p>A autossuficiência emocional torna-se um objetivo importante para [NOME].</p>
<p>Este é o momento de [NOME] iniciar projetos e assumir riscos.</p>
<p>A iniciativa pessoal de [NOME] será determinante para o sucesso.</p>`,
​2:`<p><strong>2º MOMENTO DECISIVO — Estratégia e Paciência</strong></p>
​<p>Esta fase simboliza para [NOME] um período de amadurecimento emocional.</p>
<p>O desafio deste período é [NOME] agir com estratégia e paciência.</p>
<p>A diplomacia torna-se fundamental para o crescimento de [NOME].</p>
<p>Parcerias e relações ganham importância significativa para [NOME].</p>
<p>[NOME] aprende a trabalhar em equipe e compartilhar responsabilidades.</p>
<p>É essencial [NOME] desenvolver sensibilidade e capacidade de negociação.</p>
<p>Decisões precipitadas devem ser evitadas por [NOME].</p>
<p>O sucesso de [NOME] virá através da cooperação e do equilíbrio.</p>
<p>O crescimento de [NOME] ocorre de forma gradual e constante.</p>
<p>A harmonia nas relações favorece o progresso de [NOME].</p>`,
​3:`<p><strong>2º MOMENTO DECISIVO — Comunicação e Foco</strong></p>
​<p>Esta etapa traz para [NOME] expansão social, criatividade e expressão.</p>
<p>O desafio de [NOME] é manter foco e disciplina.</p>
<p>A criatividade de [NOME] se intensifica e novas oportunidades surgem.</p>
<p>A vida social de [NOME] tende a se expandir rapidamente.</p>
<p>É importante [NOME] evitar dispersão e superficialidade.</p>
<p>Talentos comunicativos de [NOME] podem se desenvolver com facilidade.</p>
<p>A motivação de [NOME] cresce através da interação com pessoas.</p>
<p>É necessário [NOME] direcionar energia para objetivos concretos.</p>
<p>A organização transforma as ideias de [NOME] em realidade.</p>`,
​4:`<p><strong>2º MOMENTO DECISIVO — Construção e Persistência</strong></p>
​<p>Este período representa para [NOME] construção, disciplina e preparação.</p>
<p>O desafio de [NOME] é construir bases sólidas.</p>
<p>O trabalho de [NOME] passa a exigir dedicação e persistência.</p>
<p>A responsabilidade de [NOME] aumenta significativamente.</p>
<p>A organização torna-se essencial para o sucesso de [NOME].</p>
<p>Resultados de [NOME] surgem através do esforço constante.</p>
<p>O planejamento garante a [NOME] segurança futura.</p>
<p>A determinação de [NOME] constrói conquistas duradouras.</p>`,
​5:`<p><strong>2º MOMENTO DECISIVO — Adaptação e Transformação</strong></p>
​<p>Esta fase simboliza para [NOME] mudanças, liberdade e necessidade de adaptação.</p>
<p>O desafio de [NOME] é aprender a se libertar com responsabilidade.</p>
<p>Mudanças inesperadas podem ocorrer com frequência para [NOME].</p>
<p>A flexibilidade torna-se essencial para [NOME].</p>
<p>Novas experiências ampliam a visão de mundo de [NOME].</p>
<p>É importante [NOME] evitar a impulsividade excessiva.</p>
<p>O crescimento de [NOME] surge através das mudanças.</p>
<p>A liberdade consciente conduz [NOME] ao progresso.</p>`,
​6:`<p><strong>2º MOMENTO DECISIVO — Compromisso e Harmonia</strong></p>
​<p>Esta etapa destaca para [NOME] a responsabilidade afetiva e vínculos.</p>
<p>O desafio de [NOME] é manter harmonia com as pessoas.</p>
<p>Relacionamentos ganham importância significativa para [NOME].</p>
<p>A cooperação se torna essencial para o progresso de [NOME].</p>
<p>[NOME] aprende a compartilhar responsabilidades.</p>
<p>A vida afetiva de [NOME] ganha destaque.</p>
<p>A colaboração impulsiona o crescimento de [NOME].</p>
<p>O equilíbrio emocional de [NOME] garante progresso.</p>`,
​7:`<p><strong>2º MOMENTO DECISIVO — Conhecimento e Intuição</strong></p>
​<p>Este período favorece para [NOME] a introspecção e aprendizado.</p>
<p>O desafio de [NOME] é agir com praticidade.</p>
<p>A busca por conhecimento se intensifica para [NOME].</p>
<p>O autoconhecimento torna-se essencial para [NOME].</p>
<p>É necessário [NOME] evitar o isolamento excessivo.</p>
<p>A disciplina mental de [NOME] fortalece resultados.</p>
<p>O desenvolvimento de [NOME] ocorre de dentro para fora.</p>
<p>O aprendizado profundo traz sabedoria para [NOME].</p>`,
​8:`<p><strong>2º MOMENTO DECISIVO — Realização e Estratégia</strong></p>
​<p>Esta fase está ligada para [NOME] à realização material e poder.</p>
<p>O desafio de [NOME] é agir com ética e responsabilidade.</p>
<p>O trabalho de [NOME] ganha intensidade.</p>
<p>A ambição de [NOME] cresce naturalmente.</p>
<p>O planejamento financeiro se torna essencial para [NOME].</p>
<p>A liderança de [NOME] se fortalece gradualmente.</p>
<p>A disciplina garante a [NOME] resultados concretos.</p>
<p>A visão estratégica de [NOME] orienta decisões.</p>`,
​9:`<p><strong>2º MOMENTO DECISIVO — Renovação e Evolução</strong></p>
​<p>Este período representa para [NOME] transformação e desapego.</p>
<p>O desafio de [NOME] é encerrar ciclos com sabedoria.</p>
<p>Mudanças profundas podem ocorrer na vida de [NOME].</p>
<p>O passado deve ser compreendido e superado por [NOME].</p>
<p>A maturidade emocional de [NOME] se amplia.</p>
<p>A vida pede a [NOME] renovação e evolução.</p>
<p>A transformação traz para [NOME] aprendizado profundo.</p>`
},
​3:{
1:`<p><strong>3º MOMENTO DECISIVO — Determinação e Foco</strong></p>
​<p>Nesta fase a maturidade de [NOME] já está consolidada.</p>
<p>Os resultados passam a depender diretamente da iniciativa de [NOME].</p>
<p>É hora de [NOME] sair da inércia e agir com coragem.</p>
<p>O período exige de [NOME] atenção ao ambiente e às oportunidades.</p>
<p>Será necessário [NOME] reavaliar conquistas e redefinir objetivos.</p>
<p>O crescimento de [NOME] depende da disposição para se arriscar.</p>
<p>As relações sociais de [NOME] ganham importância estratégica.</p>
<p>A persistência fortalece as conquistas de [NOME].</p>
<p>O foco de [NOME] determina o sucesso deste período.</p>`,
​2:`<p><strong>3º MOMENTO DECISIVO — Equilíbrio e Parceria</strong></p>
​<p>Este período exige de [NOME] equilíbrio emocional e cooperação.</p>
<p>Será necessário [NOME] manter a individualidade com flexibilidade.</p>
<p>Parcerias tornam-se essenciais para o progresso de [NOME].</p>
<p>A paciência de [NOME] facilitará conquistas importantes.</p>
<p>É momento de [NOME] avaliar a realidade com clareza.</p>
<p>A cooperação facilitará o crescimento de [NOME].</p>
<p>A maturidade emocional favorece as decisões de [NOME].</p>`,
​3:`<p><strong>3º MOMENTO DECISIVO — Organização e Realização</strong></p>
​<p>O foco e a disciplina tornam-se fundamentais para [NOME].</p>
<p>A concentração será a chave do sucesso de [NOME].</p>
<p>É momento de [NOME] expandir e ocupar novos espaços.</p>
<p>A sociabilidade de [NOME] pode abrir portas importantes.</p>
<p>A organização evita para [NOME] sobrecarga e desgaste.</p>
<p>A experiência acumulada deve ser utilizada por [NOME].</p>
<p>A disciplina garante a [NOME] estabilidade.</p>`,
​4:`<p><strong>3º MOMENTO DECISIVO — Compromisso e Sucesso</strong></p>
​<p>Este período favorece a construção de bases sólidas para [NOME].</p>
<p>Disciplina e dedicação serão essenciais para [NOME].</p>
<p>[NOME] deve encarar dificuldades de forma prática e realista.</p>
<p>O esforço contínuo trará para [NOME] resultados concretos.</p>
<p>A responsabilidade de [NOME] define os caminhos futuros.</p>
<p>A persistência de [NOME] gera conquistas duradouras.</p>
<p>A determinação impulsiona os resultados de [NOME].</p>`,
​5:`<p><strong>3º MOMENTO DECISIVO — Prudência e Estabilidade</strong></p>
​<p>Esta fase exige de [NOME] adaptação e abertura para o novo.</p>
<p>Será necessário [NOME] abandonar o que já não serve.</p>
<p>Mudanças trarão para [NOME] crescimento e expansão.</p>
<p>A prudência será essencial nas decisões de [NOME].</p>
<p>A flexibilidade de [NOME] facilita o progresso.</p>
<p>O equilíbrio emocional de [NOME] reduz riscos.</p>
<p>A calma favorece decisões assertivas de [NOME].</p>`,
​6:`<p><strong>3º MOMENTO DECISIVO — Transição e Equilíbrio</strong></p>
​<p>Este período representa para [NOME] encerramentos e transições.</p>
<p>Novas ideias devem ser incorporadas por [NOME].</p>
<p>A serenidade será essencial para o progresso de [NOME].</p>
<p>O foco de [NOME] deve estar na felicidade e segurança.</p>
<p>A cooperação favorece resultados positivos para [NOME].</p>
<p>A harmonia fortalece as conquistas de [NOME].</p>
<p>O equilíbrio de [NOME] conduz à estabilidade.</p>`,
​7:`<p><strong>3º MOMENTO DECISIVO — Propósito e Transformação</strong></p>
​<p>Este momento pede a [NOME] propósito e autoconhecimento.</p>
<p>É hora de [NOME] redefinir valores e prioridades.</p>
<p>Aja com praticidade, [NOME], nas questões materiais.</p>
<p>Liberte-se, [NOME], de frustrações e ressentimentos.</p>
<p>Encare desafios com a confiança de [NOME].</p>
<p>O autoconhecimento fortalece as decisões de [NOME].</p>
<p>O propósito conduz [NOME] à transformação.</p>`,
​8:`<p><strong>3º MOMENTO DECISIVO — Liderança e Prosperidade</strong></p>
​<p>Este pode ser um período de grandes conquistas para [NOME].</p>
<p>Planejamento e organização serão essenciais para [NOME].</p>
<p>O sucesso dependerá da dedicação de [NOME].</p>
<p>A liderança de [NOME] ganha destaque.</p>
<p>A racionalidade de [NOME] favorece resultados.</p>
<p>O esforço de [NOME] traz reconhecimento.</p>
<p>A perseverança gera prosperidade para [NOME].</p>`,
​9:`<p><strong>3º MOMENTO DECISIVO — Evolução e Plenitude</strong></p>
​<p>Este período favorece para [NOME] a reflexão e encerramentos.</p>
<p>É hora de [NOME] consolidar aprendizados.</p>
<p>O reconhecimento será resultado das atitudes de [NOME].</p>
<p>Finalize, [NOME], pendências do passado.</p>
<p>Busque crescimento pessoal e espiritual, [NOME].</p>
<p>O desapego traz para [NOME] liberdade emocional.</p>
<p>A evolução conduz [NOME] à plenitude.</p>`
},
​4:{
1:`<p><strong>4º MOMENTO DECISIVO — Ação e Responsabilidade</strong></p>
​<p>Nesta fase a maturidade permite a [NOME] compreender o propósito.</p>
<p>Agora [NOME] possui condições de reunir ideias e agir com consciência.</p>
<p>Esta é a fase de [NOME] assumir as consequências das decisões.</p>
<p>Os resultados dependerão essencialmente da atitude de [NOME].</p>
<p>Será necessário [NOME] manter foco absoluto nos objetivos.</p>
<p>É momento de [NOME] sair da zona de conforto e agir com coragem.</p>
<p>O sucesso de [NOME] dependerá da iniciativa e determinação.</p>`,
​2:`<p><strong>4º MOMENTO DECISIVO — Transição e Realização</strong></p>
​<p>Este período simboliza para [NOME] a chegada do futuro.</p>
<p>Será necessário a [NOME] equilíbrio entre conquistas e relações.</p>
<p>É momento para [NOME] fortalecer parcerias e agir com cooperação.</p>
<p>Este é um período de transição definitiva para [NOME].</p>
<p>Avalie sua trajetória, [NOME], para não repetir erros.</p>
<p>Observe a realidade com clareza antes de [NOME] decidir.</p>`,
​3:`<p><strong>4º MOMENTO DECISIVO — Valorização e Entusiasmo</strong></p>
​<p>Este pode ser para [NOME] um período extremamente agradável.</p>
<p>Surge satisfação com as conquistas e liberdade para [NOME].</p>
<p>A prosperidade pode crescer em diversas áreas para [NOME].</p>
<p>É momento de [NOME] ocupar a posição desejada e ampliar contatos.</p>
<p>Será necessário organização para [NOME] não acumular tarefas.</p>
<p>Valorize suas conquistas, [NOME], com maturidade e entusiasmo.</p>`,
​4:`<p><strong>4º MOMENTO DECISIVO — Persistência e Segurança</strong></p>
​<p>Este será para [NOME] um período de paciência e realismo.</p>
<p>Será necessário [NOME] enfrentar limitações com coragem.</p>
<p>É momento de [NOME] cumprir obrigações com maturidade.</p>
<p>Os resultados de [NOME] serão proporcionais ao esforço.</p>
<p>Aprender a lidar com pressão será fundamental para [NOME].</p>
<p>Com persistência, [NOME] conquistará objetivos pendentes.</p>`,
​5:`<p><strong>4º MOMENTO DECISIVO — Adaptação e Crescimento</strong></p>
​<p>Este pode ser para [NOME] um período libertador.</p>
<p>Surge a necessidade de [NOME] abandonar o que se tornou obsoleto.</p>
<p>Mudanças trarão para [NOME] benefícios futuros.</p>
<p>O equilíbrio será essencial para [NOME] aproveitar oportunidades.</p>
<p>O crescimento de [NOME] virá da adaptação consciente.</p>`,
​6:`<p><strong>4º MOMENTO DECISIVO — Harmonia e Estabilidade</strong></p>
​<p>Este período encerra uma fase importante para [NOME].</p>
<p>Pode ser uma fase serena se as responsabilidades de [NOME] foram conduzidas.</p>
<p>É momento de cooperação e equilíbrio nas relações de [NOME].</p>
<p>Novas oportunidades surgem quando [NOME] resgata valores.</p>
<p>O equilíbrio entre dever e felicidade será a chave para [NOME].</p>`,
​7:`<p><strong>4º MOMENTO DECISIVO — Sabedoria e Renovação</strong></p>
​<p>Este período marca a busca de [NOME] pelo verdadeiro sentido.</p>
<p>Velhos hábitos que perderam significado devem ser deixados por [NOME].</p>
<p>Será necessário a [NOME] desapego e renovação interior.</p>
<p>Projetos abandonados por [NOME] devem ser concluídos.</p>
<p>A sabedoria permitirá a [NOME] redefinir as prioridades.</p>`,
​8:`<p><strong>4º MOMENTO DECISIVO — Reconhecimento e Justiça</strong></p>
​<p>Este pode ser para [NOME] um período de grandes realizações.</p>
<p>O controle da própria vida torna-se evidente para [NOME].</p>
<p>Será necessário planejamento e disciplina para [NOME].</p>
<p>O sucesso verdadeiro de [NOME] depende de ética e equilíbrio.</p>
<p>Se [NOME] agir com justiça, alcançará satisfação pessoal.</p>`,
​9:`<p><strong>4º MOMENTO DECISIVO — Generosidade e Serenidade</strong></p>
​<p>Este é para [NOME] um período de crescimento espiritual.</p>
<p>[NOME] será valorizada por quem é de verdade.</p>
<p>O momento favorece a [NOME] reconciliações e novos relacionamentos.</p>
<p>É tempo de [NOME] encerrar pendências e libertar-se.</p>
<p>A generosidade e a compreensão tornam-se prioridades de [NOME].</p>`
}
};
​DESAFIOS
​desafios:{
1:{
0:`<p><strong>DESAFIO 0 — Desenvolvimento da Força de Vontade</strong></p>
​<p>Neste primeiro período, [NOME] está em fase de formação do caráter.</p>
<p>O maior aprendizado de [NOME] é justamente aprender a escolher.</p>
<p>O desafio de [NOME] aqui é desenvolver força de vontade e direção.</p>
<p>[NOME] precisa aprender a confiar em si mesma.</p>
<p>É necessário [NOME] agir com autonomia diante das inseguranças.</p>
<p>O desenvolvimento da disciplina é fundamental para [NOME].</p>`,
​1:`<p><strong>DESAFIO 1 — Desenvolvimento da Iniciativa</strong></p>
​<p>Surge para [NOME] a necessidade de aprender independência.</p>
<p>[NOME] será colocada em situações que exigirão posicionamento.</p>
<p>Este desafio exige de [NOME] coragem para agir.</p>
<p>A iniciativa de [NOME] precisa ser desenvolvida gradualmente.</p>
<p>É importante [NOME] agir sem esperar aprovação constante.</p>
<p>Este desafio ensina a [NOME] a liderança interior.</p>`,
​2:`<p><strong>DESAFIO 2 — Desenvolvimento da Autoconfiança</strong></p>
​<p>A sensibilidade de [NOME] é intensa nesta fase inicial.</p>
<p>Este desafio exige de [NOME] fortalecer a confiança interior.</p>
<p>Será necessário [NOME] aprender a confiar nos próprios instintos.</p>
<p>A autovalorização de [NOME] deve ser desenvolvida gradualmente.</p>
<p>O equilíbrio emocional torna-se fundamental para [NOME].</p>`,
​3:`<p><strong>DESAFIO 3 — Desenvolvimento da Competência</strong></p>
​<p>[NOME] aprende a organizar ideias e desenvolver talentos.</p>
<p>Surge a necessidade de [NOME] expressar criatividade.</p>
<p>O desafio de [NOME] é aprender a concluir o que começa.</p>
<p>A responsabilidade de [NOME] cresce gradualmente.</p>
<p>Este desafio ensina a [NOME] organização e foco.</p>`,
​4:`<p><strong>DESAFIO 4 — Desenvolvimento da Disciplina</strong></p>
​<p>A disciplina de [NOME] precisa ser construída por hábitos.</p>
<p>[NOME] deve aprender organização e constância.</p>
<p>O desafio de [NOME] é evitar a desorganização.</p>
<p>A persistência torna-se essencial para [NOME].</p>
<p>Este desafio constrói para [NOME] estabilidade futura.</p>`,
​5:`<p><strong>DESAFIO 5 — Equilíbrio entre Liberdade e Dever</strong></p>
​<p>Surge em [NOME] o desejo de liberdade e curiosidade.</p>
<p>Este desafio ensina [NOME] a equilibrar liberdade e dever.</p>
<p>A impulsividade e ansiedade de [NOME] precisam ser controladas.</p>
<p>[NOME] aprende que toda ação gera consequências.</p>
<p>A formação do caráter de [NOME] depende da responsabilidade.</p>`,
​6:`<p><strong>DESAFIO 6 — Desenvolvimento da Tolerância</strong></p>
​<p>[NOME] aprende que nem sempre o mundo funciona conforme deseja.</p>
<p>Este desafio ensina a [NOME] empatia e compreensão.</p>
<p>Será necessário [NOME] aprender a ouvir e cooperar.</p>
<p>A tolerância de [NOME] se desenvolve através da convivência.</p>
<p>Este desafio constrói em [NOME] maturidade afetiva.</p>`,
​7:`<p><strong>DESAFIO 7 — Desenvolvimento da Confiança Interior</strong></p>
​<p>Surgem medos e inseguranças sobre o valor de [NOME].</p>
<p>Este desafio ensina [NOME] a confiar em si mesma.</p>
<p>Será necessário [NOME] enfrentar desafios com segurança.</p>
<p>A confiança de [NOME] cresce com a superação de obstáculos.</p>
<p>Este período constrói para [NOME] força emocional.</p>`,
​8:`<p><strong>DESAFIO 8 — Desenvolvimento do Equilíbrio</strong></p>
​<p>Surgem os aprendizados de [NOME] sobre valores e justiça.</p>
<p>Este desafio ensina a [NOME] o equilíbrio entre desejo e consciência.</p>
<p>[NOME] deve aprender que conquistas exigem esforço.</p>
<p>A maturidade de [NOME] se consolida através dos valores.</p>
<p>Este desafio constrói em [NOME] o senso de justiça.</p>`
},
​2:{
0:`<p><strong>DESAFIO 0 — Responsabilidade nas Escolhas</strong></p>
​<p>Na fase adulta, o desafio da escolha de [NOME] ganha mais peso.</p>
<p>A vida de [NOME] apresenta responsabilidades assumidas.</p>
<p>Este período exige de [NOME] maturidade para decidir.</p>
<p>O desafio de [NOME] é manter foco e coerência.</p>
<p>A maturidade exige de [NOME] assumir as consequências.</p>`,
​1:`<p><strong>DESAFIO 1 — Autonomia e Atitude</strong></p>
​<p>A vida de [NOME] exige decisões concretas e independência.</p>
<p>Este desafio marca a independência emocional de [NOME].</p>
<p>Será necessário [NOME] agir com coragem e confiança.</p>
<p>Situções exigirão de [NOME] liderança e iniciativa.</p>
<p>Este desafio fortalece em [NOME] a identidade e liderança.</p>`,
​2:`<p><strong>DESAFIO 2 — Estabilidade e Autoconfiança</strong></p>
​<p>Pressões sociais testam a autoconfiança de [NOME].</p>
<p>[NOME] é desafiada a confiar em sua capacidade de decisão.</p>
<p>Será necessário [NOME] manter segurança diante de críticas.</p>
<p>O desafio de [NOME] é agir com segurança e empatia.</p>
<p>Este período fortalece em [NOME] a estabilidade emocional.</p>`,
​3:`<p><strong>DESAFIO 3 — Eficiência e Planejamento</strong></p>
​<p>A vida adulta exige de [NOME] produtividade e eficiência.</p>
<p>Este desafio ensina [NOME] a organizar seus talentos.</p>
<p>Será necessário [NOME] desenvolver disciplina mental.</p>
<p>A maturidade profissional de [NOME] cresce com a prática.</p>
<p>Este desafio fortalece a realização profissional de [NOME].</p>`,
​4:`<p><strong>DESAFIO 4 — Construção de Estabilidade</strong></p>
​<p>A fase adulta exige de [NOME] estrutura e compromisso.</p>
<p>Este desafio representa a construção da estabilidade de [NOME].</p>
<p>A procrastinação e a dispersão devem ser superadas por [NOME].</p>
<p>A disciplina torna-se para [NOME] a base das conquistas.</p>
<p>Este desafio constrói para [NOME] realização duradoura.</p>`,
​5:`<p><strong>DESAFIO 5 — Maturidade e Escolha Consciente</strong></p>
​<p>Na fase adulta, a liberdade de [NOME] exige responsabilidade.</p>
<p>Este desafio ensina [NOME] a equilibrar desejos e compromissos.</p>
<p>A vida exige de [NOME] maturidade emocional nas escolhas.</p>
<p>A liberdade de [NOME] passa a ser uma escolha consciente.</p>
<p>Este período fortalece em [NOME] o equilíbrio nas decisões.</p>`,
​6:`<p><strong>DESAFIO 6 — Compreensão e Maturidade Afetiva</strong></p>
​<p>A vida adulta traz para [NOME] convivência com o diferente.</p>
<p>Este desafio ensina [NOME] a respeitar limites e opiniões.</p>
<p>Será necessário [NOME] desenvolver flexibilidade emocional.</p>
<p>O desafio de [NOME] é agir com empatia e identidade.</p>
<p>Este período fortalece em [NOME] a compreensão nas relações.</p>`,
​7:`<p><strong>DESAFIO 7 — Autoconhecimento e Sabedoria</strong></p>
​<p>Surgem situações que testam fé e autoconhecimento em [NOME].</p>
<p>Este desafio ensina [NOME] a confiar em si mesma e na vida.</p>
<p>Será necessário [NOME] enfrentar dúvidas com maturidade.</p>
<p>O desafio de [NOME] é transformar medo em sabedoria.</p>
<p>Este período fortalece em [NOME] a maturidade emocional.</p>`,
​8:`<p><strong>DESAFIO 8 — Ética e Responsabilidade Social</strong></p>
​<p>Este desafio ensina [NOME] a lidar com poder e dinheiro.</p>
<p>[NOME] aprende a usar recursos de forma ética.</p>
<p>Será necessário [NOME] evitar o orgulho excessivo.</p>
<p>O poder deve ser usado por [NOME] com sabedoria.</p>
<p>Este desafio fortalece em [NOME] a responsabilidade social.</p>`
},
​3:{
0:`<p><strong>DESAFIO 0 — Sabedoria e Aceitação</strong></p>
​<p>Na fase final, o desafio da escolha de [NOME] é mais profundo.</p>
<p>[NOME] compreende que todas as decisões construíram a realidade.</p>
<p>Este período convida [NOME] à sabedoria e ao desapego.</p>
<p>O desafio de [NOME] é aceitar erros e valorizar acertos.</p>
<p>A aceitação de [NOME] conduz à paz e plenitude.</p>`,
​1:`<p><strong>DESAFIO 1 — Liberdade Interior</strong></p>
​<p>O desafio da iniciativa assume para [NOME] caráter emocional.</p>
<p>[NOME] aprende a confiar plenamente em sua trajetória.</p>
<p>A independência de [NOME] torna-se interna e emocional.</p>
<p>O aprendizado de [NOME] consiste em agir com segurança.</p>
<p>A iniciativa de [NOME] torna-se símbolo de liberdade.</p>`,
​2:`<p><strong>DESAFIO 2 — Serenidade e Autoconfiança</strong></p>
​<p>Na maturidade, a autoconfiança de [NOME] é essencial.</p>
<p>[NOME] aprende a confiar em sua experiência acumulada.</p>
<p>O desafio de [NOME] é reconhecer o próprio valor.</p>
<p>A experiência de [NOME] torna-se fonte de segurança.</p>
<p>A serenidade substitui em [NOME] a ansiedade.</p>`,
​3:`<p><strong>DESAFIO 3 — Legado e Contribuição</strong></p>
​<p>Neste período, a competência de [NOME] é sabedoria prática.</p>
<p>[NOME] utiliza a experiência para orientar e inspirar.</p>
<p>Surge a necessidade de [NOME] compartilhar conhecimento.</p>
<p>A experiência de [NOME] torna-se uma ferramenta de legado.</p>
<p>A realização de [NOME] surge ao compartilhar com os outros.</p>`,
​4:`<p><strong>DESAFIO 4 — Qualidade de Vida e Constância</strong></p>
​<p>A disciplina de [NOME] torna-se sinônimo de equilíbrio.</p>
<p>[NOME] organiza sua vida com serenidade e propósito.</p>
<p>A disciplina torna-se ferramenta de qualidade de vida para [NOME].</p>
<p>A organização traz para [NOME] tranquilidade e segurança.</p>
<p>A disciplina fortalece a autonomia de [NOME].</p>`,
​5:`<p><strong>DESAFIO 5 — Consciência e Prudência</strong></p>
​<p>O desafio da responsabilidade ganha para [NOME] significado.</p>
<p>[NOME] compreende que experiências exigem maturidade.</p>
<p>O desafio de [NOME] é manter estabilidade diante das mudanças.</p>
<p>A vida de [NOME] pede prudência, maturidade e sabedoria.</p>
<p>O equilíbrio substitui em [NOME] a impulsividade.</p>`,
​6:`<p><strong>DESAFIO 6 — Sabedoria Emocional</strong></p>
​<p>O desafio da tolerância é essencial para a paz de [NOME].</p>
<p>[NOME] aprende a aceitar as imperfeições humanas.</p>
<p>O desafio de [NOME] é cultivar empatia nas relações.</p>
<p>O perdão torna-se para [NOME] libertação emocional.</p>
<p>O aprendizado de [NOME] transforma-se em sabedoria.</p>`,
​7:`<p><strong>DESAFIO 7 — Fé e Estabilidade Emocional</strong></p>
​<p>Este período traz o desafio de [NOME] confiar na jornada.</p>
<p>[NOME] aprende a superar medos e inseguranças acumulados.</p>
<p>O desafio de [NOME] é cultivar a confiança interior.</p>
<p>A sabedoria substitui em [NOME] a dúvida constante.</p>
<p>A confiança interior fortalece a estabilidade de [NOME].</p>`,
​8:`<p><strong>DESAFIO 8 — Dignidade e Generosidade</strong></p>
​<p>O desafio da modéstia convida [NOME] à reflexão sobre o valor.</p>
<p>[NOME] aprende a enxergar recursos com sabedoria.</p>
<p>O desafio de [NOME] é abandonar o orgulho excessivo.</p>
<p>O sucesso de [NOME] é medido pela contribuição humana.</p>
<p>A modéstia conduz [NOME] à realização e paz interior.</p>`
}
};
​ANO PESSOAL
​anoPessoal:{
1:`<p><strong>ANO PESSOAL 1 — Início de Ciclo e Renovação</strong></p>
​<p>Este é o ano que marca para [NOME] o início de um novo ciclo.</p>
<p>A energia da renovação se torna evidente na vida de [NOME].</p>
<p>É o momento de [NOME] agir, iniciar projetos e assumir o comando.</p>
<p>A vida pede a [NOME] coragem, independência e determinação.</p>
<p>Este é o momento ideal para [NOME] começar projetos e mudar hábitos.</p>
<p>A iniciativa de [NOME] será recompensada pelo universo.</p>
<p>Este ano exige de [NOME] autoconfiança e força de vontade.</p>
<p>O aprendizado principal de [NOME] é descobrir o caminho a seguir.</p>
<p>Novas oportunidades surgirão inesperadamente para [NOME].</p>
<p>Este é o ano de [NOME] construir o futuro com ação.</p>`,
​2:`<p><strong>ANO PESSOAL 2 — Paciência e Preparação</strong></p>
​<p>O ano 2 traz para [NOME] um ritmo mais lento e sensível.</p>
<p>Este período pede a [NOME] paciência, cooperação e equilíbrio.</p>
<p>Será necessário [NOME] observar, esperar e desenvolver relações.</p>
<p>A diplomacia de [NOME] será essencial para o crescimento.</p>
<p>Este é para [NOME] um período de aprendizado emocional profundo.</p>
<p>A vida pede a [NOME] calma; forçar fatos gera frustração.</p>
<p>O progresso de [NOME] ocorre de forma gradual e silenciosa.</p>
<p>É o momento de [NOME] fortalecer os vínculos importantes.</p>
<p>A paciência de [NOME] será recompensada no futuro.</p>`,
​3:`<p><strong>ANO PESSOAL 3 — Expansão e Criatividade</strong></p>
​<p>Este é para [NOME] um ano de alegria e expressão pessoal.</p>
<p>A energia favorece a comunicação e criatividade de [NOME].</p>
<p>Surge em [NOME] necessidade de viver experiências novas.</p>
<p>A vida de [NOME] se torna mais dinâmica e cheia de chances.</p>
<p>O carisma de [NOME] aumenta e a comunicação facilita.</p>
<p>A criatividade de [NOME] deve ser usada de forma produtiva.</p>
<p>Este é um período de crescimento pessoal para [NOME].</p>
<p>Novas conexões surgem com facilidade para [NOME].</p>
<p>A felicidade de [NOME] cresce com a manifestação criativa.</p>`,
​4:`<p><strong>ANO PESSOAL 4 — Estrutura e Consolidação</strong></p>
​<p>Este é para [NOME] um ano de esforço, disciplina e organização.</p>
<p>Surge a necessidade de [NOME] estruturar as conquistas.</p>
<p>Este período exige de [NOME] foco, planejamento e responsabilidade.</p>
<p>O progresso de [NOME] ocorre através do trabalho constante.</p>
<p>A vida pede a [NOME] organização financeira e estabilidade.</p>
<p>É o momento de [NOME] estabelecer prioridades e foco.</p>
<p>A disciplina de [NOME] será essencial para o sucesso.</p>
<p>A construção do futuro de [NOME] acontece agora.</p>`,
​5:`<p><strong>ANO PESSOAL 5 — Transformação e Movimento</strong></p>
​<p>Este é o ano mais dinâmico do ciclo para [NOME].</p>
<p>Mudanças inesperadas podem ocorrer para [NOME] em várias áreas.</p>
<p>A energia favorece o movimento e a liberdade de [NOME].</p>
<p>Este é um período de adaptação e crescimento para [NOME].</p>
<p>A liberdade de [NOME] aumenta, mas exige responsabilidade.</p>
<p>É o momento de [NOME] rever metas e ajustar o caminho.</p>
<p>A vida pede a [NOME] flexibilidade e coragem para mudar.</p>
<p>O crescimento de [NOME] ocorre fora da zona de conforto.</p>`,
​6:`<p><strong>ANO PESSOAL 6 — Amor e Responsabilidade</strong></p>
​<p>Este é um dos anos mais importantes para [NOME] emocionalmente.</p>
<p>Os relacionamentos de [NOME] ganham destaque e posição central.</p>
<p>Surge em [NOME] necessidade de equilíbrio e compromisso.</p>
<p>Este é para [NOME] um ano de responsabilidade afetiva.</p>
<p>A vida pede a [NOME] maturidade e dedicação às pessoas.</p>
<p>[NOME] pode ser chamada a assumir novas responsabilidades.</p>
<p>A harmonia será fundamental para o sucesso de [NOME].</p>
<p>É um período favorável para [NOME] fortalecer os vínculos.</p>
<p>A vida de [NOME] pede estabilidade e compromisso real.</p>`,
​7:`<p><strong>ANO PESSOAL 7 — Reflexão e Autoconhecimento</strong></p>
​<p>Este é o ano mais introspectivo do ciclo para [NOME].</p>
<p>Chega o momento de pausa, reflexão e estudo para [NOME].</p>
<p>A vida desacelera para permitir o crescimento de [NOME].</p>
<p>Surge em [NOME] necessidade de isolamento e silêncio.</p>
<p>O foco de [NOME] passa a ser o seu próprio mundo interior.</p>
<p>O autoconhecimento de [NOME] se torna essencial agora.</p>
<p>É o momento de [NOME] compreender a vida e reavaliar tudo.</p>
<p>O crescimento de [NOME] ocorre de dentro para fora.</p>
<p>Este período prepara o terreno para as conquistas de [NOME].</p>`,
​8:`<p><strong>ANO PESSOAL 8 — Realização e Prosperidade</strong></p>
​<p>Este é o ano das conquistas materiais para [NOME].</p>
<p>A vibração 8 representa poder e reconhecimento para [NOME].</p>
<p>O que [NOME] plantou antes começa a gerar resultados.</p>
<p>Este é um período de crescimento profissional para [NOME].</p>
<p>O sucesso dependerá da disciplina e organização de [NOME].</p>
<p>Grandes oportunidades podem surgir para [NOME].</p>
<p>A vida pede a [NOME] ambição equilibrada com ética.</p>
<p>Este é para [NOME] o período de colheita e realização.</p>
<p>O aprendizado de [NOME] é lidar com o sucesso com equilíbrio.</p>`,
​9:`<p><strong>ANO PESSOAL 9 — Finalização e Desapego</strong></p>
​<p>Este é o último ano do ciclo de nove anos para [NOME].</p>
<p>Representa para [NOME] encerramentos e preparação para o novo.</p>
<p>O que não faz mais sentido para [NOME] tende a finalizar.</p>
<p>Este é um período de limpeza emocional para [NOME].</p>
<p>O objetivo é [NOME] liberar espaço para o novo ciclo.</p>
<p>A vida pede a [NOME] desapego, compaixão e compreensão.</p>
<p>Este é um ano de conclusões para [NOME].</p>
<p>Evite resistir, [NOME], às mudanças necessárias.</p>
<p>Este é o ano de encerramento e cura para [NOME].</p>`
};
​DEFICIÊNCIAS
​deficiencias: {
1:`<p><strong>DEFICIÊNCIA 1 — Iniciativa e Autonomia</strong></p>
​<p>[NOME] precisa desenvolver mais iniciativa e determinação.</p>
<p>A vontade de [NOME] deve ser fortalecida com segurança.</p>
<p>Será necessário [NOME] defender ideias e tomar decisões.</p>
<p>A vida colocará pessoas fortes no caminho de [NOME].</p>
<p>[NOME] deve trabalhar sua autoconfiança e potencial.</p>
<p>Evite, [NOME], se anular diante das opiniões alheias.</p>
<p>Fortaleça a coragem de [NOME] para iniciar novos projetos.</p>
<p><strong>Consequências:</strong> até aprender, [NOME] sentirá indecisão e medo.</p>`,
​2:`<p><strong>DEFICIÊNCIA 2 — Cooperação e Diplomacia</strong></p>
​<p>[NOME] deve desenvolver diplomacia, flexibilidade e cooperação.</p>
<p>Aprenda, [NOME], a trabalhar em equipe e agir com sensibilidade.</p>
<p>Desenvolva em [NOME] empatia, escuta e capacidade de conciliar.</p>
<p>Evite, [NOME], impor suas opiniões de forma rígida.</p>
<p>A diplomacia será essencial para [NOME] alcançar objetivos.</p>
<p><strong>Consequências:</strong> [NOME] pode sentir timidez e isolamento.</p>`,
​3:`<p><strong>DEFICIÊNCIA 3 — Expressão e Confiança</strong></p>
​<p>[NOME] precisa aprender a se expressar com leveza e confiança.</p>
<p>A autocrítica excessiva pode gerar em [NOME] insegurança.</p>
<p>Desenvolva em [NOME] alegria e comunicação aberta.</p>
<p>Aprenda, [NOME], a ouvir críticas sem se sentir atacada.</p>
<p>Trabalhe a expressão das emoções de [NOME] com naturalidade.</p>
<p><strong>Consequências:</strong> [NOME] poderá sentir-se inibida e incompreendida.</p>`,
​4:`<p><strong>DEFICIÊNCIA 4 — Disciplina e Persistência</strong></p>
​<p>[NOME] precisa desenvolver disciplina, organização e perseverança.</p>
<p>É necessário [NOME] construir bases sólidas para sua vida.</p>
<p>Aprenda, [NOME], a aceitar regras e cumprir responsabilidades.</p>
<p>Desenvolva em [NOME] paciência e constância nos projetos.</p>
<p>Aja, [NOME], com método, planejamento e responsabilidade.</p>
<p><strong>Consequências:</strong> [NOME] poderá sentir-se perdida e desmotivada.</p>`,
​5:`<p><strong>DEFICIÊNCIA 5 — Adaptabilidade e Coragem</strong></p>
​<p>[NOME] precisa aprender a arriscar mais e viver o novo.</p>
<p>Supere, [NOME], o medo da mudança e da liberdade.</p>
<p>Amplie a visão de mundo de [NOME] e desenvolva adaptabilidade.</p>
<p>Controle a impulsividade e busque o equilíbrio para [NOME].</p>
<p>Desenvolva em [NOME] coragem para explorar oportunidades.</p>
<p><strong>Consequências:</strong> [NOME] enfrentará instabilidade e frustrações.</p>`,
​6:`<p><strong>DEFICIÊNCIA 6 — Compromisso e Aceitação</strong></p>
​<p>[NOME] precisa desenvolver comprometimento e responsabilidade.</p>
<p>Aprenda, [NOME], a demonstrar sentimentos e estabelecer vínculos.</p>
<p>Desenvolva em [NOME] empatia, carinho e compreensão.</p>
<p>Evite, [NOME], controlar as pessoas ou as relações.</p>
<p>Trabalhe em [NOME] a maturidade emocional e a aceitação.</p>
<p><strong>Consequências:</strong> [NOME] poderá sentir solidão e carência.</p>`,
​7:`<p><strong>DEFICIÊNCIA 7 — Confiança e Expressão</strong></p>
​<p>[NOME] precisa aprofundar conhecimentos e confiar nas pessoas.</p>
<p>Evite, [NOME], o isolamento excessivo e a desconfiança.</p>
<p>Desenvolva em [NOME] a comunicação emocional dos sentimentos.</p>
<p>Aprenda, [NOME], a equilibrar introspecção com convivência.</p>
<p>Trabalhe em [NOME] a confiança e a objetividade nas decisões.</p>
<p><strong>Consequências:</strong> [NOME] poderá sentir indecisão e insegurança.</p>`,
​8:`<p><strong>DEFICIÊNCIA 8 — Prudência e Visão Prática</strong></p>
​<p>[NOME] precisa desenvolver prudência e responsabilidade material.</p>
<p>Aprenda, [NOME], a administrar bens com equilíbrio e honestidade.</p>
<p>Valorize em [NOME] a disciplina financeira e organização.</p>
<p>Desenvolva em [NOME] responsabilidade e visão prática.</p>
<p><strong>Consequências:</strong> [NOME] enfrentará instabilidade financeira.</p>`,
​9:`<p><strong>DEFICIÊNCIA 9 — Altruísmo e Humanitarismo</strong></p>
​<p>[NOME] precisa desenvolver altruísmo e compaixão.</p>
<p>Aprenda, [NOME], a enxergar a vida de forma generosa.</p>
<p>Desenvolva em [NOME] tolerância, empatia e solidariedade.</p>
<p>Aprenda, [NOME], a abrir mão do orgulho e perdoar.</p>
<p>Trabalhe em [NOME] a compreensão e a visão humanitária.</p>
<p><strong>Consequências:</strong> [NOME] enfrentará desafios que estimulam o crescimento.</p>`
}
};
​
  
