import { useState } from "react";
import { IconBell } from "./Icons";

function BotaoLembrete() {
  const [mensagem, setMensagem] = useState("");

  async function ativarLembrete() {
    if (!("Notification" in window)) {
      setMensagem("Este navegador não aceita notificações.");
      return;
    }

    const permissao = await Notification.requestPermission();

    if (permissao !== "granted") {
      setMensagem("Você não permitiu as notificações.");
      return;
    }

    const registro = await navigator.serviceWorker.ready;

    await registro.showNotification("GameJam OC 48h", {
      body: "Lembrete: A GameJam OC 48h começa em breve! Prepare sua equipe.",
      icon: "/icone-192.png",
    });

    setMensagem("Lembrete ativado!");
  }

  return (
    <div className="w-full sm:w-auto flex flex-col items-center">
      <button
        type="button"
        onClick={ativarLembrete}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan-text)] active:scale-[0.98] text-sm font-medium cursor-pointer"
      >
        <IconBell className="w-4 h-4 text-[var(--accent-cyan-text)]" />
        <span>Me lembre do evento</span>
      </button>
      {mensagem && (
        <p role="status" className="mt-2.5 text-xs font-medium text-[var(--text-secondary)]">
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default BotaoLembrete;
