const connectedKnex = require('./knex-connector');

function getAllAccounts() {
    return connectedKnex('accounts').select('*');
}

function getAccountsByOwnerId(acc_id) {
    return connectedKnex('accounts').select('*').where('owner_id',acc_id).first();
}

function addAccount(acc) {
    return connectedKnex("accounts").insert(acc).returning('id');
}

function updateAccount(acc, id) {
    return connectedKnex("acoounts").where('id', id).update(acc);
}

function deleteAccount(id) {
    return connectedKnex("accounts").where('id', id).del()
}

module.exports = {
    getAccountsByOwnerId,
    getAllAccounts,
    addAccount,
  updateAccount,
    deleteAccount
}