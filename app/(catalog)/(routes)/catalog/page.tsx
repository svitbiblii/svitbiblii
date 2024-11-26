import Link from "next/link";

const CatalogPage = () => {
    return (
        <div className="p-8 max-w-3xl mx-auto">
            <h1>Каталог</h1>
            <ul>
                <li>
                    <Link href="/bibliya">Біблія</Link>
                </li>
                <li>
                    <Link href="/cloud">Хмара біблійного передання</Link>
                </li>
                <li>
                    <Link href="/biblical">Біблеїстика</Link>
                </li>
                <li>
                    <Link href="/patristics">Патристика</Link>
                </li>
                <li>
                    <Link href="/philosophy">Філософія і історія</Link>
                </li>
                <li>
                    <Link href="/dictionaries">Словники та енциклопедії</Link>
                </li>
                <li>
                    <Link href="/literature">Художня література</Link>
                </li>
                <li>
                    <Link href="/theology">Богослов&apos;я</Link>
                </li>
            </ul>
        </div>
    );
}
export default CatalogPage;