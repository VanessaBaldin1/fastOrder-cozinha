"use client";

import { useState } from 'react';
import styles from './admin.module.css';
import { PlusCircle, UtensilsCrossed } from 'lucide-react';
import { useRouter } from "next/navigation";

type ActiveTab = 'tables' | 'menu';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('tables');

  
  const router = useRouter();

const handleAddTableSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault(); 
  router.push('/maintenance'); 
};

const handleAddMenuItemSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault(); 
  router.push('/maintenance'); 
};
  return (
    <div className={styles.container}>
      <main className={styles.panel}>
        <h1 className={styles.title}>Painel de Administração</h1>
        <p className={styles.subtitle}>Gerencie mesas e itens do cardápio.</p>

       
        <div className={styles.tabNav}>
          <button
            className={`${styles.tabButton} ${activeTab === 'tables' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('tables')}
          >
            <PlusCircle size={18} />
            Adicionar Mesas
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'menu' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('menu')}
          >
            <UtensilsCrossed size={18} />
            Adicionar ao Cardápio
          </button>
        </div>

        
        <div className={styles.tabContent}>
          {activeTab === 'tables' && (
            <div className={styles.formContainer}>
              <h2 className={styles.formTitle}>Cadastrar Nova Mesa</h2>
              <form onSubmit={handleAddTableSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="tableNumber">Número ou Nome da Mesa</label>
                  <input
                    type="text"
                    id="tableNumber"
                    name="tableNumber"
                    placeholder="Ex: 15 ou Varanda 2"
                    required
                  />
                </div>
                <button type="submit" className={styles.submitButton}>
                  Salvar Mesa
                </button>
              </form>
            </div>
          )}

          {activeTab === 'menu' && (
            <div className={styles.formContainer}>
              <h2 className={styles.formTitle}>Cadastrar Novo Prato</h2>
              <form onSubmit={handleAddMenuItemSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="itemName">Nome do Prato</label>
                  <input
                    type="text"
                    id="itemName"
                    name="itemName"
                    placeholder="Ex: Pizza de Calabresa"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="itemPrice">Preço (R$)</label>
                  <input
                    type="number"
                    id="itemPrice"
                    name="itemPrice"
                    placeholder="Ex: 45.50"
                    step="0.01"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="itemCategory">Categoria</label>
                  <input
                    type="text"
                    id="itemCategory"
                    name="itemCategory"
                    placeholder="Ex: Pizzas, Bebidas, Sobremesas"
                    required
                  />
                </div>
                <button type="submit" className={styles.submitButton}>
                  Salvar Item
                </button>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminPage;