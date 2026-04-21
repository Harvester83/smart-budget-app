// src/app/dashboard/page.tsx
"use client";

export default function DashboardPage() {
    return (
        <div style={styles.container}>
            <h1>Smart Budget</h1>

            <div style={styles.card}>
                <p style={styles.label}>Balance</p>
                <h2>$1,200</h2>
            </div>

            <div style={styles.card}>
                <p style={styles.label}>Recent Transactions</p>

                <ul style={styles.list}>
                    <li>🍔 Food - $20</li>
                    <li>🚕 Taxi - $15</li>
                    <li>💰 Salary +$2000</li>
                </ul>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: 40,
        background: "#0a0a0a",
        minHeight: "100vh",
    },
    card: {
        marginTop: 20,
        padding: 20,
        background: "#111",
        borderRadius: 12,
        border: "1px solid #222",
    },
    label: {
        color: "#888",
        marginBottom: 8,
    },
    list: {
        paddingLeft: 16,
    },
};