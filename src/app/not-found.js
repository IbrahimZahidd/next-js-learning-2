import Link from "next/link"

export default function NotFound() {  //if url doesn't exist
    return (
        <div>
            <h1>This page doesnot exist</h1>
            <Link href="/">Go back to home Page</Link>
        </div>
    );
};
