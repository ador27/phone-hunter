// searchPhone javascripts
const searchPhone = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    inputField.value = '';

    if (inputText == '') {
        const errorMessage = document.getElementById('empty-error');
        errorMessage.style.display = 'block';
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`;
        fetch(url)
            .then(Response => Response.json())
            .then(data => displaySearchedPhone(data.data))
    }
}

// display phone in card 
const displaySearchedPhone = phones => {
    const searchedPhones = document.getElementById('searchedPhones');

    searchedPhones.textContent = '';

    if (phones.length > 20) {
        const firstTwenty = phones.slice(0, 20);
        firstTwenty.forEach(phone => {
            console.log(phone)

            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div class="card h-100 p-5 m-3">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title mb-5">${phone.phone_name}</h3>
                        <p class="card-text">${phone.slug}</p>
                    </div>
                    <button onclick = "loadPhoneDetails('${phone.slug}')" class="w-50 mx-auto rounded">Details</button>
                </div>
            `;
            searchedPhones.appendChild(div);
        })
    }
    else {
        phones.forEach(phone => {
            console.log(phone)

            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div class="card h-100 p-5 m-3">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">${phone.phone_name}</h3>
                        <p class="card-text">${phone.slug}</p>
                    </div>
                    <button onclick = "loadPhoneDetails('${phone.slug}')">Details</button>
                </div>
            `;
            searchedPhones.appendChild(div);
        })
    }
}

// load phone details 
const loadPhoneDetails = phoneModel => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneModel}`;
    fetch(url)
        .then(Response => Response.json())
        .then(data => displayPhoneDetails(data.data))
}

const displayPhoneDetails = phone => {
    console.log(phone);
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    const div = document.createElement('div');

    div.innerHTML = `
        <div class="card h-100 p-5 m-3">
            <div class="card-image">
                <img src="${phone.image}" class="card-img-top mb-5 p-5" alt="...">
            </div>
            <div class="card-body">
                <h3 class="card-title mb-4 fs-1">${phone.name}</h3>
                <p id="release-date" class="card-text">${phone.releaseDate}</p>
                <p class="card-text">${phone.mainFeatures.storage}</p>
                <p class="card-text">${phone.mainFeatures.displaySize}</p>
                <p class="card-text">${phone.mainFeatures.chipSet}</p>
                <p class="card-text">${phone.mainFeatures.memory}</p>
                <p class="card-text">${phone.mainFeatures.sensors}</p>
                <p class="card-text">${phone.others.Bluetooth}</p>
                <p class="card-text">${phone.others.GPS}</p>
                <p class="card-text">${phone.others.NFC}</p>
                <p class="card-text">${phone.others.Radio}</p>
                <p class="card-text">${phone.others.USB}</p>
                <p class="card-text">${phone.others.WLAN}</p>
            </div>
        </div>
    `;
    phoneDetails.appendChild(div);
}
