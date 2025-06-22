export default function ArisanChain() {
  const connectWallet = async () => {
    try {
      if (window.solana && window.solana.isPhantom) {
        const resp = await window.solana.connect();
        console.log("Wallet address:", resp.publicKey.toString());
        alert("Berhasil terhubung ke wallet Phantom: " + resp.publicKey.toString());
      } else {
        alert("Phantom Wallet tidak ditemukan. Silakan install dari https://phantom.app");
      }
    } catch (err) {
      console.error(err);
      alert("Gagal menyambungkan ke Phantom Wallet.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EAF7FF] to-white flex flex-col items-center justify-between py-6 px-4 text-center">
      <div className="w-full flex justify-end text-sm text-gray-600">
        🌐
        <select className="ml-1 bg-transparent outline-none">
          <option>ID</option>
          <option>SU</option>
          <option>EN</option>
        </select>
      </div>

      <div className="flex flex-col items-center mt-6">
        <img
          src="/piggy.png"
          alt="Piggy Bank Solana"
          className="w-32 h-32 shadow-md mb-4"
        />
        <h1 className="text-2xl font-bold text-[#2D8FFF] font-[Fredoka]">Arisan Chain</h1>
        <p className="text-sm text-gray-700 italic mt-1">
          Decentralized with Blockchain
        </p>
      </div>

      <div className="w-full flex justify-center mt-6">
        <button
          onClick={connectWallet}
          className="w-11/12 bg-[#3DA9FC] hover:bg-[#2388D9] text-white font-semibold py-3 rounded-xl shadow transition-all"
        >
          👛 Sambung ke Wallet
        </button>
      </div>

      <p className="text-xs text-gray-500 text-center mt-10 opacity-80">
        Ngariung. Nambung. Meunang. Kalawan Blockchain.
      </p>
    </div>
  );
}