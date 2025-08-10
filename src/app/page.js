"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function handleNavigate() {
    router.push("products");
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>Welcome Here!</div>
      <Link href={"products"} className="p-4">
        Navigate to Products page
      </Link>
      <Link href={"accounts"} className="p-4">
        Navigate to Accounts page
      </Link>
      <button onClick={handleNavigate} className="p-4">
        Navigate to Products page using useRouter
      </button>
    </main>
  );
}
