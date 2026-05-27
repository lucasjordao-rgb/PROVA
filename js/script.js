// Base de dados (cardápio com imagens)
const menuData = {
    entradas: [
        { 
            nome: "Bruschetta de Tomate e Manjericão", 
            descricao: "Pães artesanais grelhados, tomates frescos, alho, manjericão e azeite extra virgem.", 
            preco: 24.90,
            imagem: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500&h=400&fit=crop",
            alt: "Bruschetta de tomate e manjericão"
        },
        { 
            nome: "Iscas de Frango Crocantes", 
            descricao: "Tiras empanadas crocantes servidas com molho barbecue e maionese temperada.", 
            preco: 32.50,
            imagem: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&h=400&fit=crop",
            alt: "Iscas de frango crocantes"
        },
        { 
            nome: "Camarão al Limone", 
            descricao: "Camarões salteados com manteiga, limão siciliano e salsinha.", 
            preco: 39.90,
            imagem: "https://images.unsplash.com/photo-1625938144755-652e08e359b2?w=500&h=400&fit=crop",
            alt: "Camarão al limone"
        }
    ],
    pizzasG: [
        { 
            nome: "Margherita Especial", 
            descricao: "Molho de tomate, mussarela de búfala, manjericão fresco e parmesão.", 
            preco: 69.90,
            imagem: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500&h=400&fit=crop",
            alt: "Pizza Margherita especial"
        },
        { 
            nome: "Pepperoni Intenso", 
            descricao: "Muita mussarela, pepperoni defumado, orégano e finalização com azeite.", 
            preco: 79.90,
            imagem: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&h=400&fit=crop",
            alt: "Pizza pepperoni intenso"
        },
        { 
            nome: "Quatro Queijos LJ", 
            descricao: "Mussarela, provolone, gorgonzola e parmesão com um toque de melado.", 
            preco: 74.90,
            imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop",
            alt: "Pizza quatro queijos"
        },
        { 
            nome: "Portuguesa Premium", 
            descricao: "Presunto, ovos, cebola, azeitonas, ervilha e mussarela.", 
            preco: 76.90,
            imagem: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&h=400&fit=crop",
            alt: "Pizza portuguesa premium"
        }
    ],
    pizzasM: [
        { 
            nome: "Calabresa da Casa", 
            descricao: "Calabresa em lâminas, cebola roxa, mussarela e azeitonas verdes.", 
            preco: 54.90,
            imagem: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&h=400&fit=crop",
            alt: "Pizza calabresa"
        },
        { 
            nome: "Frango com Catupiry", 
            descricao: "Frango desfiado, catupiry original, milho e orégano.", 
            preco: 58.90,
            imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=400&fit=crop",
            alt: "Pizza frango com catupiry"
        },
        { 
            nome: "Vegetariana Deluxe", 
            descricao: "Abobrinha, berinjela, pimentão, champignon, mussarela e tomate seco.", 
            preco: 56.90,
            imagem: "https://images.unsplash.com/photo-1571066811602-716837aa0b6c?w=500&h=400&fit=crop",
            alt: "Pizza vegetariana deluxe"
        }
    ],
    pizzasP: [
        { 
            nome: "Mussarela Simples", 
            descricao: "Molho tradicional, mussarela e orégano. Tamanho individual (4 fatias).", 
            preco: 34.90,
            imagem: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=500&h=400&fit=crop",
            alt: "Pizza mussarela simples"
        },
        { 
            nome: "Napolitana", 
            descricao: "Mussarela, rodelas de tomate, parmesão, alho e manjericão.", 
            preco: 36.90,
            imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=400&fit=crop",
            alt: "Pizza napolitana"
        },
        { 
            nome: "Rústica de Rucula", 
            descricao: "Mussarela, rúcula, tomate cereja e lascas de parmesão.", 
            preco: 38.90,
            imagem: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500&h=400&fit=crop",
            alt: "Pizza rústica de rúcula"
        }
    ],
    pizzasDoces: [
        { 
            nome: "Romeu & Julieta", 
            descricao: "Goiabada cascão e queijo mussarela derretido, finalizada com canela.", 
            preco: 49.90,
            imagem: "https://images.unsplash.com/photo-1571066811602-716837aa0b6c?w=500&h=400&fit=crop",
            alt: "Pizza Romeu e Julieta"
        },
        { 
            nome: "Banana Caramelada", 
            descricao: "Banana flambada, leite condensado, canela e granulados.", 
            preco: 52.90,
            imagem: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=500&h=400&fit=crop",
            alt: "Pizza banana caramelada"
        },
        { 
            nome: "Chocolate com Morango", 
            descricao: "Chocolate ao leite, morangos frescos e raspas de chocolate branco.", 
            preco: 55.90,
            imagem: "https://images.unsplash.com/photo-1593246049226-ded77bf90326?w=500&h=400&fit=crop",
            alt: "Pizza chocolate com morango"
        }
    ],
    bebidas: [
        { 
            nome: "Coca-Cola (Lata)", 
            descricao: "Lata 350ml bem gelada.", 
            preco: 7.90,
            imagem: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=500&h=400&fit=crop",
            alt: "Coca-Cola lata"
        },
        { 
            nome: "Suco Natural de Laranja", 
            descricao: "Laranja da polpa, 500ml.", 
            preco: 12.90,
            imagem: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&h=400&fit=crop",
            alt: "Suco natural de laranja"
        },
        { 
            nome: "Água Mineral", 
            descricao: "Com ou sem gás 500ml.", 
            preco: 5.00,
            imagem: "https://images.unsplash.com/photo-1616118132534-3815505da4e1?w=500&h=400&fit=crop",
            alt: "Água mineral"
        },
        { 
            nome: "Chopp Artesanal (400ml)", 
            descricao: "Chopp claro ou escuro - tradição italiana.", 
            preco: 14.90,
            imagem: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=500&h=400&fit=crop",
            alt: "Chopp artesanal"
        }
    ],
    sobremesas: [
        { 
            nome: "Tiramisu Clássico", 
            descricao: "Camadas de biscoito champagne, café, creme de mascarpone e cacau.", 
            preco: 18.90,
            imagem: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=400&fit=crop",
            alt: "Tiramisu clássico"
        },
        { 
            nome: "Pudim de Leite Condensado", 
            descricao: "Pudim cremoso com calda de caramelo.", 
            preco: 12.90,
            imagem: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&h=400&fit=crop",
            alt: "Pudim de leite condensado"
        },
        { 
            nome: "Brownie com Sorvete", 
            descricao: "Brownie de chocolate belga + bola de creme.", 
            preco: 19.90,
            imagem: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&h=400&fit=crop",
            alt: "Brownie com sorvete"
        }
    ]
};

// Função para lidar com erro de carregamento de imagem
function handleImageError(imgElement) {
    imgElement.onerror = null;
    imgElement.src = "https://via.placeholder.com/500x400/F5E6D3/D32F2F?text=Pizzas+LJ";
    imgElement.alt = "Imagem indisponível";
}

// Função para renderizar uma categoria
function renderCategory(categoryId, elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;
    const items = menuData[categoryId];
    if (!items) {
        container.innerHTML = '<p style="padding:1rem;">Itens em breve...</p>';
        return;
    }
    let html = '';
    items.forEach(item => {
        const imagemUrl = item.imagem || "https://via.placeholder.com/500x400/F5E6D3/D32F2F?text=Pizzas+LJ";
        html += `
            <div class="card-item">
                <img 
                    class="product-image" 
                    src="${escapeHtml(imagemUrl)}" 
                    alt="${escapeHtml(item.alt || item.nome)}"
                    loading="lazy"
                    onerror="handleImageError(this)"
                >
                <div class="card-content">
                    <div class="item-name">
                        <h3>${escapeHtml(item.nome)}</h3>
                        <span class="price">R$ ${item.preco.toFixed(2)}</span>
                    </div>
                    <div class="description">${escapeHtml(item.descricao)}</div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// escape básico para evitar XSS
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if(m === '&') return '&amp;';
        if(m === '<') return '&lt;';
        if(m === '>') return '&gt;';
        return m;
    });
}

// renderizar todas as seções inicialmente
function renderAllSections() {
    renderCategory('entradas', 'entradasGrid');
    renderCategory('pizzasG', 'pizzasGGrid');
    renderCategory('pizzasM', 'pizzasMGrid');
    renderCategory('pizzasP', 'pizzasPGrid');
    renderCategory('pizzasDoces', 'pizzasDocesGrid');
    renderCategory('bebidas', 'bebidasGrid');
    renderCategory('sobremesas', 'sobremesasGrid');
}

// controle de abas/filtro
function initTabs() {
    const buttons = document.querySelectorAll('.cat-btn');
    const sections = document.querySelectorAll('.menu-section');

    function activateCategory(catId) {
        // esconde todas seções
        sections.forEach(sec => sec.classList.remove('active-section'));
        const activeSection = document.getElementById(catId);
        if (activeSection) activeSection.classList.add('active-section');

        // atualiza botão ativo
        buttons.forEach(btn => {
            const btnCat = btn.getAttribute('data-cat');
            if (btnCat === catId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const cat = btn.getAttribute('data-cat');
            // mapeamento data-cat -> id da section
            let sectionId = '';
            switch(cat) {
                case 'entradas': sectionId = 'entradas'; break;
                case 'pizzasG': sectionId = 'pizzasG'; break;
                case 'pizzasM': sectionId = 'pizzasM'; break;
                case 'pizzasP': sectionId = 'pizzasP'; break;
                case 'pizzasDoces': sectionId = 'pizzasDoces'; break;
                case 'bebidas': sectionId = 'bebidas'; break;
                case 'sobremesas': sectionId = 'sobremesas'; break;
                default: sectionId = 'entradas';
            }
            activateCategory(sectionId);
        });
    });
}

// Tornar a função handleImageError global para ser acessada pelo HTML
window.handleImageError = handleImageError;

// inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    renderAllSections();
    initTabs();
});