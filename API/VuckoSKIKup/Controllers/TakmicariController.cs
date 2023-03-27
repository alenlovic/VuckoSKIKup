using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VuckoSKIKup.Database;
using VuckoSKIKup.Models;

namespace VuckoSKIKup.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TakmicariController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TakmicariController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Takmicari
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TakmicariModel>>> GetTakmicari()
        {
          if (_context.Takmicari == null)
          {
              return NotFound();
          }
            return await _context.Takmicari.ToListAsync();
        }

        // GET: api/Takmicari/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TakmicariModel>> GetTakmicariModel(int id)
        {
          if (_context.Takmicari == null)
          {
              return NotFound();
          }
            var takmicariModel = await _context.Takmicari.FindAsync(id);

            if (takmicariModel == null)
            {
                return NotFound();
            }

            return takmicariModel;
        }

        // PUT: api/Takmicari/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTakmicariModel(int id, TakmicariModel takmicariModel)
        {
            if (id != takmicariModel.ID)
            {
                return BadRequest();
            }

            _context.Entry(takmicariModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TakmicariModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Takmicari
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TakmicariModel>> PostTakmicariModel(TakmicariModel takmicariModel)
        {
          if (_context.Takmicari == null)
          {
              return Problem("Entity set 'ApplicationDbContext.Takmicari'  is null.");
          }
            _context.Takmicari.Add(takmicariModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTakmicariModel", new { id = takmicariModel.ID }, takmicariModel);
        }

        // DELETE: api/Takmicari/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTakmicariModel(int id)
        {
            if (_context.Takmicari == null)
            {
                return NotFound();
            }
            var takmicariModel = await _context.Takmicari.FindAsync(id);
            if (takmicariModel == null)
            {
                return NotFound();
            }

            _context.Takmicari.Remove(takmicariModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TakmicariModelExists(int id)
        {
            return (_context.Takmicari?.Any(e => e.ID == id)).GetValueOrDefault();
        }
    }
}
