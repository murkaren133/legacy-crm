const $ = (q) => document.querySelector(q);

// 1. Carga de datos iniciales
function seedTables() {
    const activity = [["Cliente creado", "admin", "OK", "Completado"], ["Oportunidad editada", "ventas1", "OK", "Guardado"]];
    const activityTb = $("#activityTbody");
    if(activityTb) activityTb.innerHTML = activity.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td><span class="tag ok">${r[2]}</span></td><td>${r[3]}</td></tr>`).join('');

    const opps = [["Acme S.A.", "$12,000", "30%", "Prospección"], ["NovaRetail", "$1,500", "80%", "Negociación"]];
    const oppsTb = $("#oppsTbody");
    if(oppsTb) oppsTb.innerHTML = opps.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join('');
}

// 2. Navegación entre secciones
function showView(route) {
    document.querySelectorAll(".view").forEach(v => v.style.display = "none");
    const el = $("#view-" + route);
    if (el) el.style.display = "block";
    document.querySelectorAll(".menu a").forEach(a => a.classList.toggle("active", a.dataset.route === route));
}

function toast(msg) {
    const t = $("#toast");
    const tm = $("#toastMsg");
    if(t && tm) {
        tm.textContent = msg;
        t.style.display = "block";
        setTimeout(() => t.style.display = "none", 3000);
    }
}

// 3. Validación de Email
function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// 4. Inicialización
function init() {
    seedTables();
    
    // Navegación
    document.querySelectorAll(".menu a").forEach(a => {
        a.addEventListener("click", (e) => {
            e.preventDefault();
            showView(a.dataset.route);
        });
    });

    // Validación email en tiempo real
    const emailInput = $("#c_email");
    if(emailInput) {
        emailInput.addEventListener("input", (e) => {
            const val = e.target.value;
            if (val === "") e.target.style.borderColor = "var(--border)";
            else e.target.style.borderColor = validarEmail(val) ? "var(--ok)" : "var(--danger)";
        });
    }

    // --- CORRECCIÓN: BOTÓN LIMPIAR ---
    const btnCancel = $("#btnCancelClient");
    if (btnCancel) {
        btnCancel.addEventListener("click", () => {
            const campos = ["#c_name", "#c_email", "#c_address", "#c_notes"];
            campos.forEach(id => {
                const el = $(id);
                if (el) {
                    el.value = ""; // Limpia el valor
                    el.style.borderColor = "var(--border)"; // Resetea el color del borde
                }
            });
            toast("Formulario limpiado con éxito.");
        });
    }

    // Enviar Cliente
    const btnSubmit = $("#btnSubmitClient");
    if(btnSubmit) {
        btnSubmit.addEventListener("click", () => {
            if (!validarEmail($("#c_email").value)) {
                toast("Error: Formato de correo inválido.");
                return;
            }
            toast("Cliente guardado con éxito.");
            setTimeout(() => $("#modalBackdrop").style.display = "flex", 800);
        });
    }

    // Cerrar Modal
    if($("#modalX")) $("#modalX").addEventListener("click", () => $("#modalBackdrop").style.display = "none");
    if($("#btnModalLater")) $("#btnModalLater").addEventListener("click", () => $("#modalBackdrop").style.display = "none");
    if($("#btnModalSubmit")) $("#btnModalSubmit").addEventListener("click", () => {
        $("#modalBackdrop").style.display = "none";
        toast("¡Gracias por tu opinión!");
    });
}

document.addEventListener("DOMContentLoaded", init);