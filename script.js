
const nazvyOtazek = [
    "Hospodářský proces",
    "Podnikání, FO",
    "Podnikání, PO",
    "výroba, podnik",
    "idk",
    "Dl. maj., Odpisy",
    "Oběžný majetek",
    "Marketing",
    "Management",
    "Trh",
    "Nár. Hospod., Hosp. cykl.",
    "Nár. Hospod., z. obchod, MFI",
    "Personalistika",
    "Pracovně právní vztah",
    "Mzda",
    "Daňová soustava",
    "Daň z příjmu FO",
    "Bankovní systém",
    "Pojišťovnictví",
    "Osobní finance",
];


// Generate the list of questions
const ul = document.getElementById("seznam");
for (let i = 0; i < 20; i++) {
    const li = document.createElement('li');
    li.classList.add('item');

    // Wrap the entire <li> in an <a> tag
    const a = document.createElement('a');
    a.href = `#${i+1}`;
    a.textContent = `${i+1} - ${nazvyOtazek[i]}`; 
    a.style.display = 'block'; 
    li.appendChild(a);

    ul.appendChild(li);
}

const photoFolder = [];

for (let i = 1; i <= 20; i++) {
    photoFolder.push(i+'_1.jpg');
    photoFolder.push(i+'_2.jpg');
    photoFolder.push(i+'_3.jpg');
    photoFolder.push(i+'_4.jpg');
    photoFolder.push(i+'_5.jpg');
}

const fotkyDiv = document.querySelector('.fotky');
let currentGroup = null;

photoFolder.forEach(photo => {
    const groupNumber = photo.split('_')[0]; // Extract the group number (e.g., "8" from "8_1.jpg")

    // Add a label if the group changes
    if (groupNumber !== currentGroup) {
        currentGroup = groupNumber;

        const label = document.createElement('h2');
        label.id = groupNumber; // Set the ID to the group number
        label.textContent = `Otazka ${groupNumber} - ${nazvyOtazek[groupNumber-1]}`; // Label text
        fotkyDiv.appendChild(label);
    }

    const section = document.createElement('section');
    section.id = photo.split('.')[0]; // Use the file name (without extension) as the ID

    const link = document.createElement('a');
    link.href = `foto/${photo}`; // Link to the photo file
    link.target = '_blank'; // Open the photo in a new tab

    const img = document.createElement('img');
    img.src = `foto/${photo}`; // Assuming photos are in a "foto" folder
    img.alt = photo;

    // Handle image loading errors
    img.onerror = () => {
        section.remove(); // Remove the section if the image fails to load
        photo.remove(); // Remove the photo name from the array
    };

    link.appendChild(img); // Wrap the image in the link
    section.appendChild(link);
    fotkyDiv.appendChild(section);
});