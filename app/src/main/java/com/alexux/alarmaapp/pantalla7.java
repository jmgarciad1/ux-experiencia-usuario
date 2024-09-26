package com.alexux.alarmaapp;

import android.app.AlertDialog;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class pantalla7 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_pantalla7);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.volver), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
    }

    public void volverpantalla6(View vista) {
        Intent miIntent = new Intent(this, pantalla6.class);
        startActivity(miIntent);
        overridePendingTransition(R.anim.slide_in_left, R.anim.slide_out_right);

    }

    public void guardarfinal(View vista) {
        // Crea un AlertDialog
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("Mensaje");
        builder.setMessage("Esta es la última pantalla");

        // Botón para cerrar el diálogo
        builder.setPositiveButton("OK", (dialog, which) -> {
            // Acción al hacer clic en "OK", simplemente cerrar el diálogo
            dialog.dismiss();
        });

        // Mostrar el diálogo
        AlertDialog alertDialog = builder.create();
        alertDialog.show();

    }
}