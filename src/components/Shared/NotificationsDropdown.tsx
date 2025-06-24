import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaExclamationCircle, FaTimesCircle } from 'react-icons/fa';
import './Dropdown.css';
import { FaTrashAlt } from 'react-icons/fa';

interface NotificationsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationsDropdown: React.FC<NotificationsDropdownProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="dropdown-menu">
      {/* En-tête centré */}
      <h3 className="dropdown-header">Notifications</h3>
      <ul className="dropdown-list">
        <li className="dropdown-item">
          <FaCheckCircle className="notification-icon success" />
          <div className="item-details">
            <p className="item-name">Commande confirmée</p>
            <h1 className="notification-time">Il y a 2 minutes</h1>
          </div>
          <button className="item-remove">
            <FaTrashAlt />
          </button> 
        </li>
        <li className="dropdown-item">
          <FaExclamationCircle className="notification-icon warning" />
          <div className="item-details">
            <p className="item-name">Paiement en attente</p>
            <h1 className="notification-time">Il y a 1 heure</h1>
          </div>
          <button className="item-remove">
            <FaTrashAlt />
          </button>
        </li>
        <li className="dropdown-item">
          <FaCheckCircle className="notification-icon success" />
          <div className="item-details">
            <p className="item-name">Commande confirmée</p>
            <h1 className="notification-time">Il y a 1 jour</h1>
          </div>
          <button className="item-remove">
            <FaTrashAlt />
          </button>
        </li>
        <li className="dropdown-item">
          <FaExclamationCircle className="notification-icon warning" />
          <div className="item-details">
            <p className="item-name">Paiement en attente</p>
            <h1 className="notification-time">Il y a 1 jour</h1>
          </div>
          <button className="item-remove">
            <FaTrashAlt />
          </button>
        </li>
        <li className="dropdown-item">
          <FaCheckCircle className="notification-icon success" />
          <div className="item-details">
            <p className="item-name">Commande confirmée</p>
            <h1 className="notification-time">Il y a 1 jour</h1>
          </div>
          <button className="item-remove">
            <FaTrashAlt />
          </button>
        </li>
        <li className="dropdown-item">
          <FaCheckCircle className="notification-icon success" />
          <div className="item-details">
            <p className="item-name">Commande confirmée</p>
            <h1 className="notification-time">Il y a 1 jour</h1>
          </div>
          <button className="item-remove">
            <FaTrashAlt />
          </button>
        </li>
      </ul>
      <Link to="/notifications" className="dropdown-footer" onClick={onClose}>
        Voir toutes les notifications
      </Link>
    </div>
  );
};

export default NotificationsDropdown;