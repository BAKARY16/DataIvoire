import React, { useState } from 'react';

const Profile: React.FC = () => {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [products, setProducts] = useState<string[]>([]);

    const handleSave = () => {
        // Logic to save the artisan's profile
        console.log('Profile saved:', { name, bio, products });
    };

    const handleAddProduct = (product: string) => {
        setProducts([...products, product]);
    };

    return (
        <div>
            <h1>Mon Profil</h1>
            <div>
                <label>
                    Nom:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Bio:
                    <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
                </label>
            </div>
            <div>
                <h2>Produits</h2>
                <ul>
                    {products.map((product, index) => (
                        <li key={index}>{product}</li>
                    ))}
                </ul>
                <button onClick={() => handleAddProduct(prompt('Entrez le nom du produit') || '')}>
                    Ajouter un produit
                </button>
            </div>
            <button onClick={handleSave}>Sauvegarder le profil</button>
        </div>
    );
};

export default Profile;