import '../styles/panel-form.css'

function postValidate(data, callApi, uri, form) {
    document.querySelectorAll('.form .field').forEach(e => {
        e.classList.remove('error')
        const input = e.querySelector(`[name]`);
        e.classList.add('ok');
        const em = e.querySelector('.error-message')
        if (em) em.remove()

        e.querySelector('input').addEventListener('keypress', () => {
            e.classList.remove('ok')
        })
    })
    if (data.errors) {
        Object.keys(data.errors).map(k => {
            const ef = document.querySelector(`[name=${k}]`)
            if (ef) {
                ef.parentNode.classList.remove('ok')
                ef.parentNode.classList.add('error')
                const em = document.createElement('div');
                em.classList.add('error-message')
                em.innerHTML = data.errors[k]
                ef.parentNode.appendChild(em)
                ef.addEventListener('keypress', () => {
                    em.remove();
                    ef.parentNode.classList.remove('error')
                })
            }
        });
    }
    return true
}

class PanelInterface {
    host = 'http://localhost:3003'

    postValidate(uri, form, ok, header) {

        const submitData = {};
        document.querySelectorAll(`${form} [name]`).forEach(f => {
            const field = f.getAttribute('name');
            submitData[field] = f.value;
        })
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(submitData)
        };

        if (header && header.authorization) {
            requestOptions.headers.authorization = header.authorization;
        }

        fetch(`${this.host}${uri}`, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(res => {
                const data = res.result || {}
                postValidate(data, this, uri, form)
                if (data.errors && Object.keys(data.errors).length === 0) {
                    ok(data.responseMessage || null)
                }
            })
    }
}

export const panelForm = new PanelInterface();
