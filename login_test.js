Feature('login');

Scenario('Login com sucesso',  ({ I }) => {
    I.amOnPage('');
    I.click('Login')
    I.see('Login')
    I.fillField('#user', 'juliana@teste.com')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado', 3)
    
}).tag('@sucesso')

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {
    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login')
    I.see('Login')
    I.fillField('#user', 'juliana@teste.com')
    I.click('#btnLogin')

});

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {
    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login')
    I.see('Login')
    I.click('#btnLogin')

});

Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {
    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login')
    I.see('Login')
    I.fillField('#password', '123456')
    I.click('#btnLogin')

});


