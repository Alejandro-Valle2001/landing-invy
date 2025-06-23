import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PoliticasDePrivacidad = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-8 sm:px-12 sm:py-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Política de Privacidad
              </h1>
              
              <p className="text-gray-600 text-center mb-8">
                <strong>Última actualización:</strong> 16 de Junio del 2025
              </p>
              
              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    I. ALCANCE
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Esta Política de Privacidad aplica a toda actividad de tratamiento de datos personales realizada por Valbe Technologies S.A.C. (en adelante, "Invy"), identificada con RUC 20614322889, en cumplimiento de la Ley N.º 29733 – Ley de Protección de Datos Personales y su reglamento.
                  </p>
                  <p className="text-gray-700">
                    Invy garantiza la confidencialidad, integridad y seguridad de los datos personales que recoge a través de su sitio web, aplicación web y canales asociados.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    II. FINALIDAD DEL TRATAMIENTO
                  </h2>
                  <p className="text-gray-700 mb-4">Los datos personales que recopilamos son utilizados para:</p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700">
                    <li>Registrar y gestionar cuentas de usuario en la plataforma Invy.</li>
                    <li>Procesar pagos y emitir comprobantes electrónicos.</li>
                    <li>Brindar soporte técnico, notificaciones y mejoras del servicio.</li>
                    <li>Realizar comunicaciones comerciales o promociones (previa autorización).</li>
                    <li>Cumplir con obligaciones legales o requerimientos de SUNAT, INDECOPI u otras autoridades.</li>
                  </ul>
                  <p className="text-gray-700">
                    No tratamos ni compartimos tus datos para finalidades distintas a las aquí descritas sin tu consentimiento previo.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    III. DATOS PERSONALES QUE RECOPILAMOS
                  </h2>
                  <p className="text-gray-700 mb-4">Podemos recolectar los siguientes datos:</p>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Nombres, apellidos y documento de identidad (DNI, RUC u otro).</li>
                    <li>Correo electrónico y número de teléfono.</li>
                    <li>Razón social, dirección comercial y datos de facturación.</li>
                    <li>Registro de actividad dentro de la aplicación.</li>
                    <li>Datos técnicos como dirección IP, navegador o dispositivo usado.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    IV. CONSENTIMIENTO
                  </h2>
                  <p className="text-gray-700">
                    El consentimiento para el tratamiento de datos personales será solicitado en el momento del registro o interacción directa con la plataforma. Al aceptar nuestras condiciones de uso o utilizar el sistema, nos autorizas expresamente a tratar tus datos personales conforme a esta política.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    V. TRANSFERENCIA DE DATOS
                  </h2>
                  <p className="text-gray-700 mb-4">Invy podrá compartir datos personales con:</p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700">
                    <li>Proveedores de servicios necesarios para operar la plataforma (por ejemplo: pasarelas de pago, servicios de email, servidores).</li>
                    <li>Entidades públicas peruanas cuando sea requerido legalmente (como SUNAT).</li>
                  </ul>
                  <p className="text-gray-700">
                    Nunca venderemos ni compartiremos tu información con terceros para fines publicitarios sin tu consentimiento expreso.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    VI. DERECHOS DEL TITULAR
                  </h2>
                  <p className="text-gray-700 mb-4">Tienes derecho a:</p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700">
                    <li>Acceder a tus datos personales.</li>
                    <li>Rectificarlos si son inexactos o incompletos.</li>
                    <li>Cancelar o suprimir tus datos cuando no sean necesarios.</li>
                    <li>Oponerte al tratamiento para fines no esenciales.</li>
                  </ul>
                  <p className="text-gray-700">
                    Puedes ejercer estos derechos enviando una solicitud al correo: <strong className="text-blue-600">valbeperu@gmail.com</strong> con tu nombre completo y documento de identidad.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    VII. SEGURIDAD DE LOS DATOS
                  </h2>
                  <p className="text-gray-700">
                    Invy implementa medidas técnicas y organizativas adecuadas para proteger tus datos personales frente a accesos no autorizados, pérdida, alteración o destrucción. Esto incluye el uso de conexiones cifradas (SSL), contraseñas seguras y acceso restringido a la base de datos.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    VIII. CONSERVACIÓN DE DATOS
                  </h2>
                  <p className="text-gray-700">
                    Tus datos se conservarán durante el tiempo que mantengas una cuenta activa en Invy y por un plazo adicional de hasta 5 años tras la finalización del contrato, salvo que solicites su eliminación anticipada.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    IX. CAMBIOS EN LA POLÍTICA
                  </h2>
                  <p className="text-gray-700">
                    Podemos actualizar esta política para reflejar mejoras o cambios normativos. Notificaremos los cambios mediante nuestro sitio web o por correo electrónico. Te recomendamos revisar esta sección periódicamente.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    X. CONTACTO
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Para cualquier consulta o ejercicio de tus derechos, puedes escribirnos a:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-700 mb-2">
                      📧 <a href="mailto:valbeperu@gmail.com" className="text-blue-600 hover:text-blue-800">valbeperu@gmail.com</a>
                    </p>
                    <p className="text-gray-700">
                      📍 Valbe Technologies S.A.C. – Lima, Perú
                    </p>
                  </div>
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

export default PoliticasDePrivacidad; 