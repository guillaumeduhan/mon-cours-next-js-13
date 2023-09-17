"use client";
import { useGlobalContext } from "@/context";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [loading, setLoading] = useState<boolean>(true);

  const { title } = useGlobalContext();

  return (
    <div className="w-full p-4 border-b flex gap-4 items-center">
      <h1 className="font-bold text-xl">{title}</h1>
      <div className="flex gap-6 items-center grow">
        <Link href="/produits">Produits</Link>
        <Link href="/categories">Catégories</Link>
        <Link href="/a-propos">A propos de la boutique</Link>
      </div>
      <Link href="/panier">
        <Image alt="panier" src="/cart.svg" width={48} height={48} />
      </Link>
    </div>
  );
}
