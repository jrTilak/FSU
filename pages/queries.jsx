import Navbar from "@/components/Navbar"
import Head from "next/head"

const queries = () => {
    return (
        <>
            <Head>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.css" rel="stylesheet" />
            </Head>
            <Navbar /> <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.js" async></script>
            <div>queries</div>
        </>
    )
}
export default queries