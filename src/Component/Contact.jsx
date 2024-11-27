
const Contact = () => {
    return (
        <div 
            id="contact"
            className="flex flex-col items-center gap-y-5 mt-20"
        >
            <h1 className="text-2xl uppercase font-semibold">
                Contact
            </h1>

            <form 
                action="https://getform.io/f/f4b44512-27ca-4c5f-8d95-66951f93aeb6"
                method="POST"
                className="flex flex-col gap-y-3 text-sm w-[500px] md:w-[400px] sm:w-[270px]"
            >
                
                <input 
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    className="outline-none border border-gray-400 p-2 w-full"
                />

                <input 
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="outline-none border border-gray-400 p-2 w-full"
                />

                <textarea 
                    placeholder="Message"
                    name="message"
                    className="outline-none border border-gray-400 p-2 min-w-full min-h-[100px]"
                ></textarea>

                <input 
                    type="submit" 
                    value="Send Message" 
                    className="outline-none border border-gray-400 p-2 w-full bg-blue-800 text-white cursor-pointer"
                />
            </form>

            <p className="text-lg m-7 tracking-wider font-medium">
                Copyright Zeke <span>{new Date().getFullYear()}</span>
            </p>
        </div>
    )
}

export default Contact