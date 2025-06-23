import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CondicionesDeUso = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-8 sm:px-12 sm:py-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Condiciones de Uso de Invy
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    1. Identificación del titular del servicio
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Este documento regula el acceso y uso de la plataforma Invy, ofrecida por:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700">
                    <li><strong>Razón social:</strong> Valbe Technologies S.A.C.</li>
                    <li><strong>RUC:</strong> 20614322889 </li>
                    <li><strong>Nombre comercial:</strong> Invy</li>
                    <li><strong>Correo de contacto:</strong> valbeperu@gmail.com</li>
                    <li><strong>Domicilio legal:</strong> Lima, Perú</li>
                  </ul>
                  <p className="text-gray-700">
                    Al registrarte y usar Invy, aceptas las condiciones aquí descritas.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    2. Descripción del servicio
                  </h2>
                  <p className="text-gray-700">
                    Invy es un sistema web de gestión de inventario dirigido a emprendedores, comercios y empresas en crecimiento. Permite registrar productos, controlar stock, gestionar pedidos, generar reportes y automatizar tareas comerciales.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    3. Registro y acceso
                  </h2>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Debes proporcionar información veraz al registrarte.</li>
                    <li>Eres responsable de mantener la confidencialidad de tu contraseña.</li>
                    <li>Invy puede suspender cuentas por uso indebido o fraude.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    4. Planes, pagos y facturación
                  </h2>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>El uso de Invy requiere un plan activo, pagado por adelantado.</li>
                    <li>Los precios se detallan en la sección de suscripciones.</li>
                    <li>El impago por más de 30 días puede generar la suspensión automática del servicio.</li>
                    <li>Las facturas se emiten electrónicamente bajo normativa SUNAT.</li>
                    <li>Para cancelaciones, todas las facturas deben estar al día.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    5. Uso aceptable del sistema
                  </h2>
                  <p className="text-gray-700 mb-4">Queda prohibido:</p>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Usar Invy para actividades ilegales.</li>
                    <li>Intentar modificar, hackear o copiar el sistema.</li>
                    <li>Compartir el acceso con terceros no autorizados.</li>
                    <li>Usar la plataforma con fines no comerciales o sin relación al negocio del usuario.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    6. Disponibilidad del servicio
                  </h2>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Invy garantiza una disponibilidad del 97% mensual.</li>
                    <li>Podremos realizar mantenimientos programados con 48h de aviso.</li>
                    <li>No asumimos responsabilidad por fallos externos como caída de Internet o ataques informáticos.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    7. Soporte técnico
                  </h2>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li><strong>Horario de atención:</strong> Lunes a viernes de 9:00 a.m. a 6:00 p.m.</li>
                    <li><strong>Vía:</strong> tickets desde la app, WhatsApp o correo.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    8. Propiedad intelectual
                  </h2>
                  <p className="text-gray-700 mb-4">
                    El sistema Invy, su diseño, código fuente, y materiales visuales son propiedad exclusiva de Valbe Technologies S.A.C.
                  </p>
                  <p className="text-gray-700">
                    No se autoriza su reproducción, redistribución o venta sin permiso expreso.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    9. Datos personales y privacidad
                  </h2>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Invy cumple con la Ley N.º 29733 de Protección de Datos Personales del Perú.</li>
                    <li>Tus datos serán usados únicamente para la operación del servicio.</li>
                    <li>Puedes revisar nuestra Política de Privacidad para más información.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    10. Limitación de responsabilidades
                  </h2>
                  <p className="text-gray-700 mb-4">Valbe Technologies S.A.C. no se hace responsable por:</p>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Errores en los datos ingresados por el usuario.</li>
                    <li>Daños derivados del mal uso del sistema.</li>
                    <li>Fallas originadas por terceros (ej. proveedores de Internet).</li>
                    <li>Pérdidas económicas indirectas.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    11. Devoluciones y cancelaciones
                  </h2>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Puedes solicitar reembolso dentro de las 72h posteriores a la compra del servicio.</li>
                    <li>No se devuelve el costo de comisiones bancarias ni servicios ya usados.</li>
                    <li>Para cancelar el servicio, debes escribir a: soporte@invy.pe</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    12. Modificaciones al sistema o condiciones
                  </h2>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Invy puede actualizar sus funcionalidades sin previo aviso.</li>
                    <li>Nos reservamos el derecho de modificar estas condiciones, notificando por correo o en la app.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    13. Resolución de conflictos
                  </h2>
                  <p className="text-gray-700">
                    Cualquier disputa será resuelta bajo la legislación peruana y por los tribunales de Lima Metropolitana.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    14. Consideraciones finales
                  </h2>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>El uso del sistema implica aceptación total de estas condiciones.</li>
                    <li>Invy no realiza implementaciones personalizadas ni visitas a terreno.</li>
                    <li>Puedes comenzar a usar el sistema desde el primer día, aunque aún estés en proceso de certificación SUNAT.</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CondicionesDeUso; 