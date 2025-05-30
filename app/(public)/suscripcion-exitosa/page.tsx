import Link from "next/link";

export default function SuscripcionExitosaPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🎉</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            ¡Gracias por tu suscripción!
          </h1>
          <p className="text-gray-600">
            Tu cuenta se actualizará automáticamente en unos segundos.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-green-700">
            <strong>✅ Suscripción confirmada</strong>
          </p>
          <p className="text-xs text-green-600 mt-1">
            Recibirás un email de confirmación en breve
          </p>
        </div>

        <div className="space-y-3">
          <Link 
            href="/"
            className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Volver al Inicio
          </Link>
          
          <Link 
            href="/soporte"
            className="block w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Contactar Soporte
          </Link>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Si no ves los cambios, vuelve a iniciar sesión o contacta soporte.
        </p>
      </div>
    </main>
  );
} 