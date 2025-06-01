document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/sections') // Update this URL if your JSON server runs on a different port
        .then(response => response.json())
        .then(data => {
            const contentSection = document.getElementById('content');
            data.forEach(section => {
                const sectionElement = document.createElement('section');
                sectionElement.id = section.id;

                const sectionTitle = document.createElement('h2');
                sectionTitle.innerText = section.title;
                sectionElement.appendChild(sectionTitle);

                section.articles.forEach(article => {
                    const articleElement = document.createElement('article');
                    const plantInfo = document.createElement('div');
                    plantInfo.classList.add('plant-info');

                    const plantImgDiv = document.createElement('div');
                    plantImgDiv.classList.add('plant-img');
                    const plantImg = document.createElement('img');
                    plantImg.src = article.plantImg;
                    plantImgDiv.appendChild(plantImg);

                    const plantDetailsDiv = document.createElement('div');
                    plantDetailsDiv.classList.add('plant-details');

                    const plantName = document.createElement('h3');
                    plantName.innerText = article.plantName;
                    plantDetailsDiv.appendChild(plantName);

                    const commonNames = document.createElement('p');
                    commonNames.innerHTML = `<strong>Common Names:</strong> ${article.commonNames}`;
                    plantDetailsDiv.appendChild(commonNames);

                    const description = document.createElement('p');
                    description.innerHTML = `<strong>Description:</strong> ${article.description}`;
                    plantDetailsDiv.appendChild(description);

                    const medicinalUses = document.createElement('p');
                    medicinalUses.innerHTML = `<strong>Medicinal Uses:</strong>`;
                    const useList = document.createElement('ul');

                    article.medicinalUses.forEach(useItem => {
                        const listItem = document.createElement('li');
                        listItem.innerHTML = `<strong>${useItem.use}:</strong> ${useItem.benefit}`;
                        useList.appendChild(listItem);
                    });

                    plantDetailsDiv.appendChild(medicinalUses);
                    plantDetailsDiv.appendChild(useList);

                    const preparationMethods = document.createElement('p');
                    preparationMethods.innerHTML = `<strong>Preparation Methods:</strong> ${article.preparationMethods}`;
                    plantDetailsDiv.appendChild(preparationMethods);

                    const precautions = document.createElement('p');
                    precautions.innerHTML = `<strong>Precautions:</strong> ${article.precautions}`;
                    plantDetailsDiv.appendChild(precautions);
                  

                    plantInfo.appendChild(plantImgDiv);
                    plantInfo.appendChild(plantDetailsDiv);

                    articleElement.appendChild(plantInfo);
                    sectionElement.appendChild(articleElement);

                     // Add an hr tag after each plant information
                     const hr = document.createElement('hr');
                     sectionElement.appendChild(hr);

                    
                });

                contentSection.appendChild(sectionElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
