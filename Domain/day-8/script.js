
const loadBtn = document.getElementById("loadBtn");

const gallery = document.getElementById("gallery");


const ACCESS_KEY = "mejOWQVbkS-yCxPtKsoI2SeApSwRHYhvrckiuRreIKE";

loadBtn.addEventListener("click", loadImages);




async function loadImages() {

    // Show loading message

    gallery.innerHTML = `
        <p class="loading">
            Loading images...
        </p>
    `;


    try {

   

        const url =
            `https://api.unsplash.com/photos/random?count=10&client_id=${ACCESS_KEY}`;


        

        const response = await fetch(url);


        // Check response

        if (!response.ok) {

            throw new Error("Failed to load images");

        }


        // Convert response to JSON

        const images = await response.json();


        // Remove loading message

        gallery.innerHTML = "";


        // Create cards

        images.forEach(photo => {

            // Create card

            const card = document.createElement("div");

            card.className = "card";


            // Create image

            const img = document.createElement("img");

            img.src = photo.urls.regular;

            img.alt =
                photo.alt_description || "Random Unsplash image";


            // Create information section

            const info = document.createElement("div");

            info.className = "card-info";


           

            info.innerHTML = `
                <p>
                    Photo by
                    <a
                        href="${photo.user.links.html}?utm_source=random_gallery&utm_medium=referral"
                        target="_blank"
                    >
                        ${photo.user.name}
                    </a>

                    on

                    <a
                        href="https://unsplash.com/?utm_source=random_gallery&utm_medium=referral"
                        target="_blank"
                    >
                        Unsplash
                    </a>
                </p>
            `;


            // Add image to card

            card.appendChild(img);


            // Add information to card

            card.appendChild(info);


            // Add card to gallery

            gallery.appendChild(card);

        });

    }


    catch (error) {

        console.error(error);


        gallery.innerHTML = `
            <p class="loading">
                Failed to load images.
                Please check your Access Key.
            </p>
        `;

    }

}

