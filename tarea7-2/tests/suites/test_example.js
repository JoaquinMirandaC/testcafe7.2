import ExamplePage from '../page_model/example-model'

const page = new ExamplePage();

fixture `Instagram login`
.page `https://www.instagram.com/`;


test('input name', async t => {
    const usuario = 'dummyaccount411';
    const correo = 'fofawam582@smlmail.com';
    const pass = 'GenericPassword1';
    await t
        .typeText(page.usernameInput, correo)
        .typeText(page.passwordInput, pass)
        .click(page.submitButton)
        .wait(5000);
        // esta verifica que el login haya funcionado buscando el nombre de usuario que aparece en home de Instagram despues de un login exitoso
    await t.expect(page.accountName.innerText).contains(usuario);
});