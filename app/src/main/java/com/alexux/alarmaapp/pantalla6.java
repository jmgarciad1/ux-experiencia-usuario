package com.alexux.alarmaapp;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class pantalla6 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_pantalla6);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.volver), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
    }

    public void volverpantalla5(View vista) {
        Intent miIntent = new Intent(this, pantalla5.class);
        startActivity(miIntent);
        overridePendingTransition(R.anim.slide_in_left, R.anim.slide_out_right);

    }

    public void irpantalla7(View vista) {
        Intent miIntent = new Intent(this, pantalla7.class);
        startActivity(miIntent);
        overridePendingTransition(R.anim.slide_in_right, R.anim.slide_out_left);

    }
}