# Setup EmailJS - Natural Path Coach

### 3. Template Email

Dashboard → "Email Templates" → "Create New"

**Nome Template**: `Natural Path Coach Contact`

**Template HTML**:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Nuova Richiesta di Consulenza - Natural Path Coach</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8f9fa; line-height: 1.6;">

    <!-- Header con gradiente arancione del sito -->
    <div style="background: linear-gradient(135deg, #e67e22, #f39c12); padding: 30px 20px; text-align: center;">
        <h1 style="margin: 0; color: white; font-size: 28px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
            🏋️‍♂️ Natural Path Coach
        </h1>
        <p style="margin: 10px 0 0 0; color: rgba(255,255,255,0.95); font-size: 16px; font-weight: 500;">
            Nuova Richiesta di Consulenza
        </p>
    </div>

    <!-- Container principale -->
    <div style="max-width: 600px; margin: 0 auto; background: white; box-shadow: 0 10px 30px -10px rgba(230, 126, 34, 0.3);">

        <!-- Sezione informazioni cliente -->
        <div style="padding: 30px; background: linear-gradient(to right, #fff, #fefefe);">
            <div style="border-left: 4px solid #e67e22; padding-left: 20px; margin-bottom: 25px;">
                <h2 style="margin: 0 0 15px 0; color: #2c3e50; font-size: 22px; font-weight: 600;">
                    👤 Informazioni Cliente
                </h2>
            </div>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; border: 1px solid #e9ecef;">
                <div style="margin-bottom: 12px;">
                    <span style="color: #e67e22; font-weight: 600; font-size: 14px;">NOME COMPLETO</span>
                    <p style="margin: 5px 0 0 0; color: #2c3e50; font-size: 16px; font-weight: 500;">{{from_name}}</p>
                </div>

                <div style="margin-bottom: 12px;">
                    <span style="color: #e67e22; font-weight: 600; font-size: 14px;">EMAIL</span>
                    <p style="margin: 5px 0 0 0; color: #2c3e50; font-size: 16px;">
                        <a href="mailto:{{from_email}}" style="color: #3498db; text-decoration: none;">{{from_email}}</a>
                    </p>
                </div>

                <div style="margin-bottom: 0;">
                    <span style="color: #e67e22; font-weight: 600; font-size: 14px;">TELEFONO</span>
                    <p style="margin: 5px 0 0 0; color: #2c3e50; font-size: 16px;">
                        {{phone}}
                    </p>
                </div>
            </div>
        </div>

        <!-- Sezione messaggio -->
        <div style="padding: 0 30px 30px 30px;">
            <div style="border-left: 4px solid #e67e22; padding-left: 20px; margin-bottom: 20px;">
                <h3 style="margin: 0; color: #2c3e50; font-size: 20px; font-weight: 600;">
                    💬 Messaggio del Cliente
                </h3>
            </div>

            <div style="background: white; padding: 25px; border-radius: 12px; border: 2px solid #f1c40f; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                <p style="margin: 0; color: #34495e; font-size: 16px; line-height: 1.7; white-space: pre-wrap;">{{message}}</p>
            </div>
        </div>

        <!-- Call to action -->
        <div style="background: linear-gradient(135deg, #e67e22, #f39c12); padding: 25px 30px; text-align: center; border-radius: 0 0 12px 12px;">
            <p style="margin: 0 0 10px 0; color: white; font-size: 18px; font-weight: 600;">
                ⏰ Rispondere entro 24 ore
            </p>
            <p style="margin: 0; color: rgba(255,255,255,0.9); font-size: 14px;">
                Email inviata automaticamente dal sito Natural Path Coach
            </p>
        </div>
    </div>

    <!-- Footer -->
    <div style="max-width: 600px; margin: 20px auto; padding: 20px; text-align: center;">
        <p style="margin: 0; color: #7f8c8d; font-size: 12px;">
            © 2025 Natural Path Coach - Personal Training & Coaching
        </p>
    </div>

</body>
</html>