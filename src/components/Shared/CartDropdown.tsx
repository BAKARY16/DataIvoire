import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import './Dropdown.css';

interface CartDropdownProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="dropdown-menu">
            {/* En-tête centré */}
            <h3 className="dropdown-header">Votre Panier</h3>
            <ul className="dropdown-list">
                <li className="dropdown-item">
                    <div className="item-icon">
                        <img src="public/paiement-en-ligne.png" alt="Produit 1" />
                    </div>
                    <div className="item-details">
                        <p className="item-name">Produit 1</p>
                        <h1 className="item-quantity">Quantité : 2</h1>
                    </div>
                    <button className="item-remove">
                        <FaTrashAlt />
                    </button>
                </li>
                <li className="dropdown-item">
                    <div className="item-icon">
                        <img src="public/paiement-en-ligne.png" alt="Produit 2" />
                    </div>
                    <div className="item-details">
                        <p className="item-name">Produit 2</p>
                        <h1 className="item-quantity">Quantité : 1</h1>
                    </div>
                    <button className="item-remove">
                        <FaTrashAlt />
                    </button>
                </li>
                <li className="dropdown-item">
                    <div className="item-icon">
                        <img src="public/paiement-en-ligne.png" alt="Produit 1" />
                    </div>
                    <div className="item-details">
                        <p className="item-name">Produit 3</p>
                        <h1 className="item-quantity">Quantité : 1</h1>
                    </div>
                    <button className="item-remove">
                        <FaTrashAlt />
                    </button>
                </li>
                <li className="dropdown-item">
                    <div className="item-icon">
                        <img src="public/paiement-en-ligne.png" alt="Produit 2" />
                    </div>
                    <div className="item-details">
                        <p className="item-name">Produit 4</p>
                        <h1 className="item-quantity">Quantité : 1</h1>
                    </div>
                    <button className="item-remove">
                        <FaTrashAlt />
                    </button>
                </li>
            </ul>
            <Link to="/cart" className="dropdown-footer" onClick={onClose}>
                Voir le panier complet
            </Link>
        </div>
    );
};

export default CartDropdown;