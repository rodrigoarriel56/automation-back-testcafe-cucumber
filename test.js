fixture('Teste de API');

test('GET todos by id', async t =>{

    const resp = await t.request({
        url: 'https://www.google.com.br',
        method: 'GET'
    });

    console.log(resp);

    await t.expect(resp.status).eql(200);
});
