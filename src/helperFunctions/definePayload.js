export const definePayload = (action, taskKey, airtableFields) => {
    let payload = {}

    switch (action) {
        case "update":
            payload = {
                "id": taskKey,
                "fields": airtableFields
            }
            break;
        case "create":
            payload = {
                "fields": airtableFields
            }
            break;
        case "delete":
            payload = {
                "id": taskKey
            }
            break;

    }
    payload.action = action
    return payload

}