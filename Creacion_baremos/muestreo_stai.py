import pandas as pd

ARCHIVO_ENTRADA = "estudiantes.xlsx"
ARCHIVO_SALIDA = "muestra_seleccionada_500.xlsx"
CANTIDAD_MUESTRA = 500
SEMILLA = 1482026 #Semilla generada a partir de la fecha de creación del script (14/08/2026)


print("Cargando la base de datos de estudiantes...")
df_poblacion = pd.read_excel(ARCHIVO_ENTRADA)

print(f"Total de registros detectados: {len(df_poblacion)}")

df_muestra = df_poblacion.sample(n=CANTIDAD_MUESTRA, random_state=SEMILLA) #Seleccion de 500 estudiantes de manera aleatoria

df_muestra.to_excel(ARCHIVO_SALIDA, index=False) #Se guarda la muestra seleccionada en un nuevo archivo Excel

print("=" * 60)
print(" ¡PROCESO COMPLETADO CON ÉXITO!")
print("=" * 60)
print(
    f"• Se extrajeron {CANTIDAD_MUESTRA} estudiantes con la semilla {SEMILLA}."
)
print(f"• Tu nuevo archivo se guardó como: '{ARCHIVO_SALIDA}'")
print("=" * 60)