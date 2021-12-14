const row = document.querySelector(".row");

const data = fetch("https://jsonplaceholder.typicode.com/todos")
                .then(res => res.json())
                .then(data => {
                    data.map(item => {
                        const {title} = item;

                        const card = document.createElement("div");
                        card.classList.add("card");
                        card.classList.add("col-md-4");
                        card.classList.add("m-3");

                        const cardBody = document.createElement("div");
                        cardBody.classList.add("card-body");
                        const cardTitle = document.createElement("h5");
                        cardTitle.classList.add("card-title");
                        cardTitle.innerText = title;
                        cardBody.appendChild(cardTitle)
                        card.appendChild(cardBody)
                        row.appendChild(card)
                    })
                    // title.innerText = data.title
                })
                .catch(error => console.log(error.message))

