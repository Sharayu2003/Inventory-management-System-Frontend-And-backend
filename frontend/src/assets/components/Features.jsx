import React from "react";
import { FaClock, FaBarcode, FaBell, FaTruck, FaChartLine, FaWarehouse } from "react-icons/fa";
import "./Feature.css"

const Features = () => {
  return (
    <div className="maindiv">
      <h1>Features</h1>
      <div className="subclass">
        <div className="div">
          <h5><FaClock style={{ height:"50px", marginRight: "8px", color: "teal" }} /> Real-Time Inventory Tracking</h5>
          <p>The system updates stock levels automatically whenever products are purchased, sold, or moved between warehouses.</p>
        </div>

        <div className="div">
          <h5><FaBarcode style={{ marginRight: "8px", color: "purple" }} /> Barcode & QR Code Scanning</h5>
          <p>Speeds up inventory operations like product entry, stock verification, and checkout. Reduces manual typing and mistakes while handling large quantities.</p>
        </div>

        <div className="div">
          <h5><FaBell style={{ marginRight: "8px", color: "orange" }} /> Stock Alerts & Notifications</h5>
          <p>The system sends automatic alerts when items are low in stock, about to expire, or out of stock. Prevents shortages that can affect sales and customer satisfaction.</p>
        </div>
      </div>

      <div className="subclass">
        <div className="div">
          <h5><FaTruck style={{ marginRight: "8px", color: "brown" }} /> Supplier & Purchase Management</h5>
          <p>Manages vendor details, purchase orders (POs), invoices, and deliveries. Helps track which supplier delivered which items and at what cost.</p>
        </div>

        <div className="div">
          <h5><FaChartLine style={{ marginRight: "8px", color: "blue" }} /> Detailed Reports & Analytics</h5>
          <p>Provides insights on fast-moving items, slow-moving items, demand forecasting, sales trends, and stock valuation. Helps managers make better business decisions with data.</p>
        </div>

        <div className="div">
          <h5><FaWarehouse style={{ marginRight: "8px", color: "green" }} /> Multi-Location Warehouse Management</h5>
          <p>Centralizes inventory data across different warehouses, stores, or branches. Helps in transferring stock between warehouses and keeping track of each location’s inventory.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;