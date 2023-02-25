let Security = {
    requestOptions: function (payload) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        // headers.append("Authorization", "Bearer yhtyt");

        return {
            method: "POST",
            body: JSON.stringify(payload),
            headers: headers,
        }
    },
}

export default Security;