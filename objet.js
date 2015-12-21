                                                    


contacts = [{
    prenom: "Valérian",
    nom: "Michel",
    numero: "0123456789"
}, {
    prenom: "David",
    nom: "Smith",
    numero: "0123456789"
}];

function texteContact(contact) {
    return contact.prenom + " " + contact.nom + " (" + contact.numero + ")";
}

alert(texteContact(contacts[0]));