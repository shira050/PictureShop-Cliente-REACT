
export function loadInvite(Invite) {
    return { type: "LOAD_INVITE",payload:Invite }
}
export function loadInvites(Invites) {
    return { type: "LOAD_INVITES",payload:Invites }
}
export function addInvite(Invite) {
    return { type: "ADD_INVITE",payload:Invite }
}
// export function uppdateInvite(Invite) {
//     return { type: "UPPDATE_INVITE",payload:Invite }
// }

// export function removeInvite(Invite) {
//     return { type: "REMOVE_INVITE",payload:Invite }
// }


