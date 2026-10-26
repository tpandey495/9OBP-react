import "./style.css";

function Footer() {

    const data = [
        {
            id: 1,
            name: "Company",
            options: [
                {
                    id: 1,
                    name: "About Us",
                    link: "/about-us"
                },
                {
                    id: 2,
                    name: "Legal",
                    link: "/legal"
                },
                {
                    id: 3,
                    name: "Careers",
                    link: "/career"
                },
                {
                    id: 4,
                    name: "Contact Us",
                    link: "/contact-us"
                }
            ]
        },
        {
            id: 2,
            name: "Explore",
            options: [
                {
                    id: 3,
                    name: "Practice",
                    link: "/practice"
                },
                {
                    id: 4,
                    name: "Blogs",
                    link: "/blog"
                }

            ]
        },
         {
            id: 3,
            name: "Tutorials",
            options: [
                {
                    id: 3,
                    name: "Practice",
                    link: "/practice"
                },
                {
                    id: 4,
                    name: "Blogs",
                    link: "/blog"
                }

            ]
        }
    ];

    return (
        <div className="footer">
            {
                data.map((category) => (
                   <div key={category.id}>
                    <h1>{category.name}</h1>
                    {
                        category.options.map((option) => <p key={option.id}> {option.name}</p>
                        )
                    }
                    </div>
                   
                ))
            }

        </div>
    )
}

export default Footer;