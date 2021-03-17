const axios = require('axios');

describe('/municipios/v1/uf (E2E)', () => {
  test('Utilizando um UF válido: PA', async () => {
    const requestUrl = `${global.SERVER_URL}/api/municipios/v1/uf/PA`;
    const response = await axios.get(requestUrl);

    expect(response.status).toBe(200);
    expect(response.data).toEqual(
      JSON.parse(
        `[{"nome":"Abaetetuba","codigo_ibge":"1500107"},{"nome":"Abel Figueiredo","codigo_ibge":"1500131"},{"nome":"Acará","codigo_ibge":"1500206"},{"nome":"Afuá","codigo_ibge":"1500305"},{"nome":"Água Azul do Norte","codigo_ibge":"1500347"},{"nome":"Alenquer","codigo_ibge":"1500404"},{"nome":"Almeirim","codigo_ibge":"1500503"},{"nome":"Altamira","codigo_ibge":"1500602"},{"nome":"Anajás","codigo_ibge":"1500701"},{"nome":"Ananindeua","codigo_ibge":"1500800"},{"nome":"Anapu","codigo_ibge":"1500859"},{"nome":"Augusto Corrêa","codigo_ibge":"1500909"},{"nome":"Aurora do Pará","codigo_ibge":"1500958"},{"nome":"Aveiro","codigo_ibge":"1501006"},{"nome":"Bagre","codigo_ibge":"1501105"},{"nome":"Baião","codigo_ibge":"1501204"},{"nome":"Bannach","codigo_ibge":"1501253"},{"nome":"Barcarena","codigo_ibge":"1501303"},{"nome":"Belém","codigo_ibge":"1501402"},{"nome":"Belterra","codigo_ibge":"1501451"},{"nome":"Benevides","codigo_ibge":"1501501"},{"nome":"Bom Jesus do Tocantins","codigo_ibge":"1501576"},{"nome":"Bonito","codigo_ibge":"1501600"},{"nome":"Bragança","codigo_ibge":"1501709"},{"nome":"Brasil Novo","codigo_ibge":"1501725"},{"nome":"Brejo Grande do Araguaia","codigo_ibge":"1501758"},{"nome":"Breu Branco","codigo_ibge":"1501782"},{"nome":"Breves","codigo_ibge":"1501808"},{"nome":"Bujaru","codigo_ibge":"1501907"},{"nome":"Cachoeira do Arari","codigo_ibge":"1502004"},{"nome":"Cachoeira do Piriá","codigo_ibge":"1501956"},{"nome":"Cametá","codigo_ibge":"1502103"},{"nome":"Canaã dos Carajás","codigo_ibge":"1502152"},{"nome":"Capanema","codigo_ibge":"1502202"},{"nome":"Capitão Poço","codigo_ibge":"1502301"},{"nome":"Castanhal","codigo_ibge":"1502400"},{"nome":"Chaves","codigo_ibge":"1502509"},{"nome":"Colares","codigo_ibge":"1502608"},{"nome":"Conceição do Araguaia","codigo_ibge":"1502707"},{"nome":"Concórdia do Pará","codigo_ibge":"1502756"},{"nome":"Cumaru do Norte","codigo_ibge":"1502764"},{"nome":"Curionópolis","codigo_ibge":"1502772"},{"nome":"Curralinho","codigo_ibge":"1502806"},{"nome":"Curuá","codigo_ibge":"1502855"},{"nome":"Curuçá","codigo_ibge":"1502905"},{"nome":"Dom Eliseu","codigo_ibge":"1502939"},{"nome":"Eldorado do Carajás","codigo_ibge":"1502954"},{"nome":"Faro","codigo_ibge":"1503002"},{"nome":"Floresta do Araguaia","codigo_ibge":"1503044"},{"nome":"Garrafão do Norte","codigo_ibge":"1503077"},{"nome":"Goianésia do Pará","codigo_ibge":"1503093"},{"nome":"Gurupá","codigo_ibge":"1503101"},{"nome":"IgarapAçu","codigo_ibge":"1503200"},{"nome":"IgarapMiri","codigo_ibge":"1503309"},{"nome":"Inhangapi","codigo_ibge":"1503408"},{"nome":"Ipixuna do Pará","codigo_ibge":"1503457"},{"nome":"Irituia","codigo_ibge":"1503507"},{"nome":"Itaituba","codigo_ibge":"1503606"},{"nome":"Itupiranga","codigo_ibge":"1503705"},{"nome":"Jacareacanga","codigo_ibge":"1503754"},{"nome":"Jacundá","codigo_ibge":"1503804"},{"nome":"Juruti","codigo_ibge":"1503903"},{"nome":"Limoeiro do Ajuru","codigo_ibge":"1504000"},{"nome":"Mãe do Rio","codigo_ibge":"1504059"},{"nome":"Magalhães Barata","codigo_ibge":"1504109"},{"nome":"Marabá","codigo_ibge":"1504208"},{"nome":"Maracanã","codigo_ibge":"1504307"},{"nome":"Marapanim","codigo_ibge":"1504406"},{"nome":"Marituba","codigo_ibge":"1504422"},{"nome":"Medicilândia","codigo_ibge":"1504455"},{"nome":"Melgaço","codigo_ibge":"1504505"},{"nome":"Mocajuba","codigo_ibge":"1504604"},{"nome":"Moju","codigo_ibge":"1504703"},{"nome":"Mojuí dos Campos","codigo_ibge":"1504752"},{"nome":"Monte Alegre","codigo_ibge":"1504802"},{"nome":"Muaná","codigo_ibge":"1504901"},{"nome":"Nova Esperança do Piriá","codigo_ibge":"1504950"},{"nome":"Nova Ipixuna","codigo_ibge":"1504976"},{"nome":"Nova Timboteua","codigo_ibge":"1505007"},{"nome":"Novo Progresso","codigo_ibge":"1505031"},{"nome":"Novo Repartimento","codigo_ibge":"1505064"},{"nome":"Óbidos","codigo_ibge":"1505106"},{"nome":"Oeiras do Pará","codigo_ibge":"1505205"},{"nome":"Oriximiná","codigo_ibge":"1505304"},{"nome":"Ourém","codigo_ibge":"1505403"},{"nome":"Ourilândia do Norte","codigo_ibge":"1505437"},{"nome":"Pacajá","codigo_ibge":"1505486"},{"nome":"Palestina do Pará","codigo_ibge":"1505494"},{"nome":"Paragominas","codigo_ibge":"1505502"},{"nome":"Parauapebas","codigo_ibge":"1505536"},{"nome":"Pau-d'Arco","codigo_ibge":"1505551"},{"nome":"Peixe-Boi","codigo_ibge":"1505601"},{"nome":"Piçarra","codigo_ibge":"1505635"},{"nome":"Placas","codigo_ibge":"1505650"},{"nome":"Ponta de Pedras","codigo_ibge":"1505700"},{"nome":"Portel","codigo_ibge":"1505809"},{"nome":"Porto de Moz","codigo_ibge":"1505908"},{"nome":"Prainha","codigo_ibge":"1506005"},{"nome":"Primavera","codigo_ibge":"1506104"},{"nome":"Quatipuru","codigo_ibge":"1506112"},{"nome":"Redenção","codigo_ibge":"1506138"},{"nome":"Rio Maria","codigo_ibge":"1506161"},{"nome":"Rondon do Pará","codigo_ibge":"1506187"},{"nome":"Rurópolis","codigo_ibge":"1506195"},{"nome":"Salinópolis","codigo_ibge":"1506203"},{"nome":"Salvaterra","codigo_ibge":"1506302"},{"nome":"Santa Bárbara do Pará","codigo_ibge":"1506351"},{"nome":"Santa Cruz do Arari","codigo_ibge":"1506401"},{"nome":"Santa Izabel do Pará","codigo_ibge":"1506500"},{"nome":"Santa Luzia do Pará","codigo_ibge":"1506559"},{"nome":"Santa Maria das Barreiras","codigo_ibge":"1506583"},{"nome":"Santa Maria do Pará","codigo_ibge":"1506609"},{"nome":"Santana do Araguaia","codigo_ibge":"1506708"},{"nome":"Santarém","codigo_ibge":"1506807"},{"nome":"Santarém Novo","codigo_ibge":"1506906"},{"nome":"Santo Antônio do Tauá","codigo_ibge":"1507003"},{"nome":"São Caetano de Odivelas","codigo_ibge":"1507102"},{"nome":"São Domingos do Araguaia","codigo_ibge":"1507151"},{"nome":"São Domingos do Capim","codigo_ibge":"1507201"},{"nome":"São Félix do Xingu","codigo_ibge":"1507300"},{"nome":"São Francisco do Pará","codigo_ibge":"1507409"},{"nome":"São Geraldo do Araguaia","codigo_ibge":"1507458"},{"nome":"São João da Ponta","codigo_ibge":"1507466"},{"nome":"São João de Pirabas","codigo_ibge":"1507474"},{"nome":"São João do Araguaia","codigo_ibge":"1507508"},{"nome":"São Miguel do Guamá","codigo_ibge":"1507607"},{"nome":"São Sebastião da Boa Vista","codigo_ibge":"1507706"},{"nome":"Sapucaia","codigo_ibge":"1507755"},{"nome":"Senador José Porfírio","codigo_ibge":"1507805"},{"nome":"Soure","codigo_ibge":"1507904"},{"nome":"Tailândia","codigo_ibge":"1507953"},{"nome":"Terra Alta","codigo_ibge":"1507961"},{"nome":"Terra Santa","codigo_ibge":"1507979"},{"nome":"TomAçu","codigo_ibge":"1508001"},{"nome":"Tracuateua","codigo_ibge":"1508035"},{"nome":"Trairão","codigo_ibge":"1508050"},{"nome":"Tucumã","codigo_ibge":"1508084"},{"nome":"Tucuruí","codigo_ibge":"1508100"},{"nome":"Ulianópolis","codigo_ibge":"1508126"},{"nome":"Uruará","codigo_ibge":"1508159"},{"nome":"Vigia","codigo_ibge":"1508209"},{"nome":"Viseu","codigo_ibge":"1508308"},{"nome":"Vitória do Xingu","codigo_ibge":"1508357"},{"nome":"Xinguara","codigo_ibge":"1508407"}]`
      )
    );
  });

  test('Utilizando um UF válido minúsculo: pa', async () => {
    const requestUrl = `${global.SERVER_URL}/api/municipios/v1/uf/pa`;
    const response = await axios.get(requestUrl);

    expect(response.status).toBe(200);
    expect(response.data).toEqual(
      JSON.parse(
        `[{"nome":"Abaetetuba","codigo_ibge":"1500107"},{"nome":"Abel Figueiredo","codigo_ibge":"1500131"},{"nome":"Acará","codigo_ibge":"1500206"},{"nome":"Afuá","codigo_ibge":"1500305"},{"nome":"Água Azul do Norte","codigo_ibge":"1500347"},{"nome":"Alenquer","codigo_ibge":"1500404"},{"nome":"Almeirim","codigo_ibge":"1500503"},{"nome":"Altamira","codigo_ibge":"1500602"},{"nome":"Anajás","codigo_ibge":"1500701"},{"nome":"Ananindeua","codigo_ibge":"1500800"},{"nome":"Anapu","codigo_ibge":"1500859"},{"nome":"Augusto Corrêa","codigo_ibge":"1500909"},{"nome":"Aurora do Pará","codigo_ibge":"1500958"},{"nome":"Aveiro","codigo_ibge":"1501006"},{"nome":"Bagre","codigo_ibge":"1501105"},{"nome":"Baião","codigo_ibge":"1501204"},{"nome":"Bannach","codigo_ibge":"1501253"},{"nome":"Barcarena","codigo_ibge":"1501303"},{"nome":"Belém","codigo_ibge":"1501402"},{"nome":"Belterra","codigo_ibge":"1501451"},{"nome":"Benevides","codigo_ibge":"1501501"},{"nome":"Bom Jesus do Tocantins","codigo_ibge":"1501576"},{"nome":"Bonito","codigo_ibge":"1501600"},{"nome":"Bragança","codigo_ibge":"1501709"},{"nome":"Brasil Novo","codigo_ibge":"1501725"},{"nome":"Brejo Grande do Araguaia","codigo_ibge":"1501758"},{"nome":"Breu Branco","codigo_ibge":"1501782"},{"nome":"Breves","codigo_ibge":"1501808"},{"nome":"Bujaru","codigo_ibge":"1501907"},{"nome":"Cachoeira do Arari","codigo_ibge":"1502004"},{"nome":"Cachoeira do Piriá","codigo_ibge":"1501956"},{"nome":"Cametá","codigo_ibge":"1502103"},{"nome":"Canaã dos Carajás","codigo_ibge":"1502152"},{"nome":"Capanema","codigo_ibge":"1502202"},{"nome":"Capitão Poço","codigo_ibge":"1502301"},{"nome":"Castanhal","codigo_ibge":"1502400"},{"nome":"Chaves","codigo_ibge":"1502509"},{"nome":"Colares","codigo_ibge":"1502608"},{"nome":"Conceição do Araguaia","codigo_ibge":"1502707"},{"nome":"Concórdia do Pará","codigo_ibge":"1502756"},{"nome":"Cumaru do Norte","codigo_ibge":"1502764"},{"nome":"Curionópolis","codigo_ibge":"1502772"},{"nome":"Curralinho","codigo_ibge":"1502806"},{"nome":"Curuá","codigo_ibge":"1502855"},{"nome":"Curuçá","codigo_ibge":"1502905"},{"nome":"Dom Eliseu","codigo_ibge":"1502939"},{"nome":"Eldorado do Carajás","codigo_ibge":"1502954"},{"nome":"Faro","codigo_ibge":"1503002"},{"nome":"Floresta do Araguaia","codigo_ibge":"1503044"},{"nome":"Garrafão do Norte","codigo_ibge":"1503077"},{"nome":"Goianésia do Pará","codigo_ibge":"1503093"},{"nome":"Gurupá","codigo_ibge":"1503101"},{"nome":"IgarapAçu","codigo_ibge":"1503200"},{"nome":"IgarapMiri","codigo_ibge":"1503309"},{"nome":"Inhangapi","codigo_ibge":"1503408"},{"nome":"Ipixuna do Pará","codigo_ibge":"1503457"},{"nome":"Irituia","codigo_ibge":"1503507"},{"nome":"Itaituba","codigo_ibge":"1503606"},{"nome":"Itupiranga","codigo_ibge":"1503705"},{"nome":"Jacareacanga","codigo_ibge":"1503754"},{"nome":"Jacundá","codigo_ibge":"1503804"},{"nome":"Juruti","codigo_ibge":"1503903"},{"nome":"Limoeiro do Ajuru","codigo_ibge":"1504000"},{"nome":"Mãe do Rio","codigo_ibge":"1504059"},{"nome":"Magalhães Barata","codigo_ibge":"1504109"},{"nome":"Marabá","codigo_ibge":"1504208"},{"nome":"Maracanã","codigo_ibge":"1504307"},{"nome":"Marapanim","codigo_ibge":"1504406"},{"nome":"Marituba","codigo_ibge":"1504422"},{"nome":"Medicilândia","codigo_ibge":"1504455"},{"nome":"Melgaço","codigo_ibge":"1504505"},{"nome":"Mocajuba","codigo_ibge":"1504604"},{"nome":"Moju","codigo_ibge":"1504703"},{"nome":"Mojuí dos Campos","codigo_ibge":"1504752"},{"nome":"Monte Alegre","codigo_ibge":"1504802"},{"nome":"Muaná","codigo_ibge":"1504901"},{"nome":"Nova Esperança do Piriá","codigo_ibge":"1504950"},{"nome":"Nova Ipixuna","codigo_ibge":"1504976"},{"nome":"Nova Timboteua","codigo_ibge":"1505007"},{"nome":"Novo Progresso","codigo_ibge":"1505031"},{"nome":"Novo Repartimento","codigo_ibge":"1505064"},{"nome":"Óbidos","codigo_ibge":"1505106"},{"nome":"Oeiras do Pará","codigo_ibge":"1505205"},{"nome":"Oriximiná","codigo_ibge":"1505304"},{"nome":"Ourém","codigo_ibge":"1505403"},{"nome":"Ourilândia do Norte","codigo_ibge":"1505437"},{"nome":"Pacajá","codigo_ibge":"1505486"},{"nome":"Palestina do Pará","codigo_ibge":"1505494"},{"nome":"Paragominas","codigo_ibge":"1505502"},{"nome":"Parauapebas","codigo_ibge":"1505536"},{"nome":"Pau-d'Arco","codigo_ibge":"1505551"},{"nome":"Peixe-Boi","codigo_ibge":"1505601"},{"nome":"Piçarra","codigo_ibge":"1505635"},{"nome":"Placas","codigo_ibge":"1505650"},{"nome":"Ponta de Pedras","codigo_ibge":"1505700"},{"nome":"Portel","codigo_ibge":"1505809"},{"nome":"Porto de Moz","codigo_ibge":"1505908"},{"nome":"Prainha","codigo_ibge":"1506005"},{"nome":"Primavera","codigo_ibge":"1506104"},{"nome":"Quatipuru","codigo_ibge":"1506112"},{"nome":"Redenção","codigo_ibge":"1506138"},{"nome":"Rio Maria","codigo_ibge":"1506161"},{"nome":"Rondon do Pará","codigo_ibge":"1506187"},{"nome":"Rurópolis","codigo_ibge":"1506195"},{"nome":"Salinópolis","codigo_ibge":"1506203"},{"nome":"Salvaterra","codigo_ibge":"1506302"},{"nome":"Santa Bárbara do Pará","codigo_ibge":"1506351"},{"nome":"Santa Cruz do Arari","codigo_ibge":"1506401"},{"nome":"Santa Izabel do Pará","codigo_ibge":"1506500"},{"nome":"Santa Luzia do Pará","codigo_ibge":"1506559"},{"nome":"Santa Maria das Barreiras","codigo_ibge":"1506583"},{"nome":"Santa Maria do Pará","codigo_ibge":"1506609"},{"nome":"Santana do Araguaia","codigo_ibge":"1506708"},{"nome":"Santarém","codigo_ibge":"1506807"},{"nome":"Santarém Novo","codigo_ibge":"1506906"},{"nome":"Santo Antônio do Tauá","codigo_ibge":"1507003"},{"nome":"São Caetano de Odivelas","codigo_ibge":"1507102"},{"nome":"São Domingos do Araguaia","codigo_ibge":"1507151"},{"nome":"São Domingos do Capim","codigo_ibge":"1507201"},{"nome":"São Félix do Xingu","codigo_ibge":"1507300"},{"nome":"São Francisco do Pará","codigo_ibge":"1507409"},{"nome":"São Geraldo do Araguaia","codigo_ibge":"1507458"},{"nome":"São João da Ponta","codigo_ibge":"1507466"},{"nome":"São João de Pirabas","codigo_ibge":"1507474"},{"nome":"São João do Araguaia","codigo_ibge":"1507508"},{"nome":"São Miguel do Guamá","codigo_ibge":"1507607"},{"nome":"São Sebastião da Boa Vista","codigo_ibge":"1507706"},{"nome":"Sapucaia","codigo_ibge":"1507755"},{"nome":"Senador José Porfírio","codigo_ibge":"1507805"},{"nome":"Soure","codigo_ibge":"1507904"},{"nome":"Tailândia","codigo_ibge":"1507953"},{"nome":"Terra Alta","codigo_ibge":"1507961"},{"nome":"Terra Santa","codigo_ibge":"1507979"},{"nome":"TomAçu","codigo_ibge":"1508001"},{"nome":"Tracuateua","codigo_ibge":"1508035"},{"nome":"Trairão","codigo_ibge":"1508050"},{"nome":"Tucumã","codigo_ibge":"1508084"},{"nome":"Tucuruí","codigo_ibge":"1508100"},{"nome":"Ulianópolis","codigo_ibge":"1508126"},{"nome":"Uruará","codigo_ibge":"1508159"},{"nome":"Vigia","codigo_ibge":"1508209"},{"nome":"Viseu","codigo_ibge":"1508308"},{"nome":"Vitória do Xingu","codigo_ibge":"1508357"},{"nome":"Xinguara","codigo_ibge":"1508407"}]`
      )
    );
  });

  test('Utilizando um UF inexistente ou inválido: XZ', async () => {
    const requestUrl = `${global.SERVER_URL}/api/municipios/v1/uf/XZ`;

    try {
      await axios.get(requestUrl);
    } catch (error) {
      const { response } = error;
      expect(response.status).toBe(404);
    }
  });

  test('Utilizando um UF inexistente ou inválido: XZZ', async () => {
    const requestUrl = `${global.SERVER_URL}/api/municipios/v1/uf/XZZ`;

    try {
      await axios.get(requestUrl);
    } catch (error) {
      const { response } = error;
      expect(response.status).toBe(404);
    }
  });

  test('Utilizando um UF inexistente: XZY', async () => {
    const requestUrl = `${global.SERVER_URL}/api/municipios/v1/uf/XZY`;

    try {
      await axios.get(requestUrl);
    } catch (error) {
      const { response } = error;
      expect(response.status).toBe(404);
      expect(response.data).toMatchObject({
        name: 'cities_error',
        message: 'Cidades não encontradas para o estado solicitado',
        type: 'CITIES_NOT_FOUND',
      });
    }
  });
});
